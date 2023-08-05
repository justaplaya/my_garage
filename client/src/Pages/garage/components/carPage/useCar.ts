import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Car } from '../../models/car';
import { useQuery } from '@apollo/client';
import { GET_ONE_CAR } from 'Apollo/query/quecar';
import { getCountry } from 'Pages/garage/utils';

export const useCar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [car, setCar] = useState<Car | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const id = Number(location.pathname.split('id=')[location.pathname.split('id=').length - 1]);

  const { data, error } = useQuery(GET_ONE_CAR, {
    variables: {
      id,
    },
    errorPolicy: 'all',
  });

  useEffect(() => {
    if (data?.getOneCar && !error) {
      setCar(data.getOneCar);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    error && navigate(location.state?.from || '/garage');
  }, [loading, error]);

  const props = {
    container: { $country: getCountry(car?.brand || null) },
    header: { car, loading, setShowModal, error },
    body: { car },
    modal: { show: showModal, setShow: setShowModal, setLoading: () => {}, refetch: () => {} },
  };

  return { car, props };
};
