import React, { ChangeEvent, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CarType } from './models/car';
import { useQuery, useLazyQuery, ApolloProvider } from '@apollo/client';
import { ApolloProvider as ApolloProviderHooks, useQuery as useQueryHooks } from '@apollo/react-hooks';
import { GET_ALL_CARS } from '../../Apollo/query/quecar';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CreateModal } from '../../Components/SideModal/CreateModal/CreateModal';
import { useDebounce } from '../../Hooks/useDebounce';
import { List, Card, Search, Sort, Car, CreateButton, Container, Row } from './style';
import { NotFound } from './NotFound';
import { SortOptionType, useSortOptions } from '../../utils';
import SearchIcon from 'img/search.png';
import { GetBrandIcon } from 'utils/Car';
import { useOnClickOutside } from '../../Hooks/useOnClickOutside';

import { CardLoader } from './loaders/Card';
import { useTranslation } from 'react-i18next';
import 'utils/i18next';

export const Garage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cars, setCars] = useState<CarType[]>([]);
  const { data, error, refetch } = useQuery(GET_ALL_CARS);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data?.getAllCars && !error) {
      !error && setCars(data.getAllCars);
      setLoading(false);
    }
  }, [data]);

  const [showModal, setShowModal] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const sortOptions = useSortOptions();
  const initialSortValue = sortOptions[0];
  const [sortValue, setSortValue] = useState<SortOptionType>(initialSortValue);
  const [displayValue, setDisplayValue] = useState('');
  const searchValue = useDebounce(displayValue, 500);
  const convertor = (arg: string | number | null, typeOfOutput: 'string' | 'number'): string | number => {
    switch (typeof arg) {
      case 'string':
        return arg.toLowerCase();
      case 'number':
        return arg;
      default:
        return typeOfOutput === 'string' ? 'ÿ' : 99999; //TODO костыль
    }
  };
  const figureSortOutput = (first: CarType, second: CarType, option: SortOptionType) => {
    const { id, by, direction } = option;
    if (id === 0) return 0;
    const typeOfOutput = by === 'year' || by === 'maxSpeed' || by === 'timeUpTo100' ? 'number' : 'string';
    if (convertor(first[by], typeOfOutput) === convertor(second[by], typeOfOutput)) return 0;
    if (direction === 'asc') return convertor(first[by], typeOfOutput) > convertor(second[by], typeOfOutput) ? 1 : -1;
    if (direction === 'desc') return convertor(first[by], typeOfOutput) < convertor(second[by], typeOfOutput) ? 1 : -1;
    throw Error(`invalid direction field of the sort option`);
  };

  const filteredCars = useMemo(
    () =>
      cars?.length
        ? Object.values(cars)
            .filter(
              (car) =>
                car.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
                car.model?.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .sort((a, b) => {
              return figureSortOutput(a, b, sortValue);
            })
        : [],
    [cars, searchValue, sortValue],
  );

  useEffect(() => {
    if (location && location.state && location.state.refetchRequired) {
      refetch();
      setLoading(true);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const searchOnChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setDisplayValue(target.value);
  };
  const CreateButtonClick = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };
  const cardClick = (car: CarType) => {
    navigate(`/garage/id=${car.id}`, {
      state: {
        from: location.pathname,
      },
    });
  };
  const sortContainerClick = () => {
    setShowSort((prev) => !prev);
  };
  const sortOptionClick = (option: SortOptionType) => {
    setSortValue(option);
  };

  const sortContainer = useRef<HTMLDivElement>(null);
  useOnClickOutside(sortContainer, () => {
    setShowSort(false);
  });
  const { t, i18n } = useTranslation();
  // const changeLang = (lang: string) => {
  //   i18n.changeLanguage(lang);
  // };
  // const dynamicPickedSortOption = useMemo(
  //   () => sortOptions.find((option) => option.id === sortValue?.id),
  //   [sortValue, i18n.language],
  // );
  useEffect(() => {
    console.log('sortOptions');
    console.log(sortOptions);
    const relevantSortValue = sortOptions.find((option) => option.id === sortValue?.id);
    if (relevantSortValue) {
      setSortValue(relevantSortValue);
    }
  }, [i18n.language]);
  return (
    <Container>
      <Row>
        <Sort.Container onClick={sortContainerClick} ref={sortContainer}>
          <Sort.PlaceholderOption>{sortValue?.text ?? ''}</Sort.PlaceholderOption>
          <Sort.SortOptionsWrapper $show={showSort}>
            {sortOptions.map((option, index) => (
              <Sort.SortOption
                key={index}
                onClick={() => sortOptionClick(option)}
                $fontSize={[9, 10].includes(option.id) ? '17.5px' : null}
              >
                {option.text}
              </Sort.SortOption>
            ))}
          </Sort.SortOptionsWrapper>
        </Sort.Container>
        <Search.Container>
          <Search.Icon src={SearchIcon} />
          <Search.Input
            value={displayValue}
            onChange={searchOnChange}
            placeholder={`${t('pages.garage.main.search')}`}
          />
        </Search.Container>
        <CreateButton $disabled={loading} onClick={CreateButtonClick}>
          {t('pages.garage.main.create')}
        </CreateButton>
      </Row>
      <List.Container $centerItems={!filteredCars.length && !loading}>
        {loading ? (
          Array(3)
            .fill(null)
            .map((card, index) => <CardLoader key={index} />)
        ) : filteredCars.length ? (
          filteredCars.map((car, index) => (
            <List.Card key={index} onClick={() => cardClick(car)}>
              <Card.Icon src={GetBrandIcon(car.brand)} />
              <Card.Separator />
              <Card.Brand>{car.brand}</Card.Brand>
              <Card.Model>{car.model}</Card.Model>
            </List.Card>
          ))
        ) : (
          <NotFound searchValue={searchValue} />
        )}
      </List.Container>
      <CreateModal show={showModal} setShow={setShowModal} setLoading={setLoading} refetch={refetch} />
    </Container>
  );
};
