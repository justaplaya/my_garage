import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { Car } from './models/car';
import { figureSortOutput, useSortOptions } from 'Pages/garage/utils';
import { useDebounce } from 'Hooks/useDebounce';
import { useQuery } from '@apollo/client';
import { GET_ALL_CARS } from 'Apollo/query/quecar';
import { useTranslation } from 'react-i18next';
import { SortOptionType } from './types';

export const useGarage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sortOptions = useSortOptions();
  const { t, i18n } = useTranslation();

  const [allCars, setAllCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [displayValue, setDisplayValue] = useState('');
  const searchValue = useDebounce(displayValue, 500);
  const initialSortValue = sortOptions[0];
  const [sortValue, setSortValue] = useState<SortOptionType>(initialSortValue);

  const { data, error, refetch } = useQuery(GET_ALL_CARS);
  const text = { create: t('pages.garage.main.create') };

  useEffect(() => {
    if (data?.getAllCars && !error) {
      !error && setAllCars(data.getAllCars);
      setLoading(false);
      // TODO error handler
    }
  }, [data]);

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

  useEffect(() => {
    const relevantSortValue = sortOptions.find((option) => option.id === sortValue?.id);
    if (relevantSortValue) {
      setSortValue(relevantSortValue);
    }
  }, [i18n.language]);

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
