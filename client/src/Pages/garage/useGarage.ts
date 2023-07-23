import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Car } from './models/car';
import { SortOptionType, useSortOptions } from 'Pages/garage/utils';
import { useDebounce } from 'Hooks/useDebounce';
import { useQuery } from '@apollo/client';
import { GET_ALL_CARS } from 'Apollo/query/quecar';
import { useOnClickOutside } from 'Hooks/useOnClickOutside';
import { useTranslation } from 'react-i18next';

export const useGarage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const sortOptions = useSortOptions();
  const initialSortValue = sortOptions[0];
  const [sortValue, setSortValue] = useState<SortOptionType>(initialSortValue);
  const [displayValue, setDisplayValue] = useState('');
  const searchValue = useDebounce(displayValue, 500);
  const { data, error, refetch } = useQuery(GET_ALL_CARS);
  useEffect(() => {
    if (data?.getAllCars && !error) {
      !error && setAllCars(data.getAllCars);
      setLoading(false);
      // TODO error handler
    }
  }, [data]);

  const convert = (arg: string | number | null, typeOfOutput: 'string' | 'number'): string | number => {
    switch (typeof arg) {
      case 'string':
        return arg.toLowerCase();
      case 'number':
        return arg;
      default:
        return typeOfOutput === 'string' ? '' : 0;
    }
  };
  const figureSortOutput = (_first: Car, _second: Car, option: SortOptionType) => {
    const { id, by, direction } = option;
    if (!id) return 0;
    const numberFields = ['year', 'maxSpeed', 'timeUpTo100'];
    const typeOfOutput = numberFields.includes(by) ? 'number' : 'string';
    const first = convert(_first[by], typeOfOutput);
    const second = convert(_second[by], typeOfOutput);
    if (first === second) return 0;
    if (direction === 'asc') return first > second ? 1 : -1;
    if (direction === 'desc') return first < second ? 1 : -1;
    console.error(`invalid direction field of the sort option`);
    return 0;
  };

  const cars = useMemo(() => {
    const match = (arg: string | null) => (arg ?? '').toLowerCase().includes(searchValue.toLowerCase());
    return allCars?.length
      ? Object.values(allCars)
          .filter((car) => match(car.brand) || match(car.model))
          .sort((a, b) => {
            return figureSortOutput(a, b, sortValue);
          })
      : [];
  }, [allCars, searchValue, sortValue]);

  useEffect(() => {
    location && location.pathname === '/' && navigate('/garage');
    if (location && location.state && location.state.refetchRequired) {
      refetch();
      setLoading(true);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const createClick = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const sortContainer = useRef<HTMLDivElement>(null);
  useOnClickOutside(sortContainer, () => {
    setShowSort(false);
  });
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const relevantSortValue = sortOptions.find((option) => option.id === sortValue?.id);
    if (relevantSortValue) {
      setSortValue(relevantSortValue);
    }
  }, [i18n.language]);
  const text = { create: t('pages.garage.main.create') };
  const props = {
    sort: {
      showSort: showSort,
      setShowSort: setShowSort,
      sortValue: sortValue,
      setSortValue: setSortValue,
    },
    search: {
      displayValue: displayValue,
      setDisplayValue: setDisplayValue,
    },
    createBtn: { $disabled: loading, onClick: createClick },
    list: {
      cars: cars,
      loading: loading,
      searchValue: searchValue,
      setShowModal,
    },
    createModal: {
      show: showModal,
      setShow: setShowModal,
      setLoading: setLoading,
      refetch: refetch,
    },
  };
  return { props, text };
};
