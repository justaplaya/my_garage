import { CarType } from './types';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { EditModal } from '../../Components/SideModal/EditModal/EditModal';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { DELETE_CAR } from '../../Apollo/mutations/mutcar';
import { GET_ONE_CAR } from '../../Apollo/query/quecar';
import { Car as CarStyle } from './style';
import { figureCountry } from '../../utils';
import { GetBrandIcon } from 'utils/Car';
import { useMeasure } from '../../Hooks';
import Test from './test';
import { useResource, useUseGetOneCar } from './resource';
import { Img } from './loaders/Card/Img';
import { Text } from './loaders/Card/Text';
import { useTranslation } from 'react-i18next';

export const Car = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [deleteCar] = useMutation(DELETE_CAR);
  const id = Number(location.pathname.split('id=')[location.pathname.split('id=').length - 1]);
  const [car, setCar] = useState<CarType | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { data, error } = useQuery(GET_ONE_CAR, {
    variables: {
      id,
    },
    errorPolicy: 'all',
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data?.getOneCar && !error) {
      setCar(data.getOneCar);
      setLoading(false);
    }
  }, [data]);
  useEffect(() => {
    error && navigate(location.state?.from || '/garage');
  }, [loading, error]);

  const deleteCarFunction = (id: number) => {
    deleteCar({
      variables: {
        input: {
          id,
        },
      },
    }).then(() => {
      navigate(location.state?.from || '/garage', {
        state: {
          refetchRequired: true,
        },
      });
    });
  };

  const backClick = () => {
    navigate(location.state?.from || '/garage');
  };
  const editClick = () => {
    document.body.style.overflow = 'hidden';
    setShowModal(true);
  };
  const deleteClick = (id: number) => {
    deleteCarFunction(id);
  };
  const renderContent = !loading && !error && car;
  const showInfo = car ? car.year !== null || car.maxSpeed !== null || car.timeUpTo100 !== null : false;
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { height } = useMeasure<HTMLDivElement>(headerRef, [headerRef, renderContent]);
  const { t } = useTranslation();

  return (
    <CarStyle.Container $country={figureCountry(car?.brand || null)}>
      <CarStyle.Header ref={(el) => (headerRef.current = el)}>
        <CarStyle.HeaderTop>
          <CarStyle.BackButton onClick={backClick}>{t('pages.garage.car.back')}</CarStyle.BackButton>
          <CarStyle.HeaderTopRow>
            <CarStyle.EditButton onClick={() => (loading ? {} : editClick())}>
              {t('pages.garage.car.edit')}
            </CarStyle.EditButton>
            <CarStyle.DeleteButton onClick={() => (!car ? {} : deleteClick(car.id))}>
              {t('pages.garage.car.delete')}
              {/* TODO лоадер на delete */}
            </CarStyle.DeleteButton>
          </CarStyle.HeaderTopRow>
        </CarStyle.HeaderTop>
        {renderContent ? (
          <>
            <CarStyle.HeaderBottom>
              <CarStyle.Icon src={GetBrandIcon(car.brand)} />
              <CarStyle.YSeparator />
              <CarStyle.InfoWrapper>
                <CarStyle.Brand>{car.brand}</CarStyle.Brand>
                {car.model && (
                  <>
                    <CarStyle.XSeparator />
                    <CarStyle.Model>{car.model}</CarStyle.Model>
                  </>
                )}
              </CarStyle.InfoWrapper>
              {showInfo && (
                <>
                  <CarStyle.YSeparator />
                  <CarStyle.InfoWrapper>
                    {car.year !== null && <CarStyle.InfoText>{t('pages.garage.car.year')}</CarStyle.InfoText>}
                    {car.year !== null && <CarStyle.InfoText>{car.year}</CarStyle.InfoText>}
                    {car.year !== null && (car.maxSpeed !== null || car.timeUpTo100 !== null) && <CarStyle.XSeparator />}
                    {car.maxSpeed !== null && <CarStyle.InfoText>{t('pages.garage.car.maxSpeed')}</CarStyle.InfoText>}
                    {car.maxSpeed !== null && <CarStyle.InfoText>{car.maxSpeed} км/ч</CarStyle.InfoText>}
                    {car.maxSpeed !== null && car.timeUpTo100 !== null && <CarStyle.XSeparator />}
                    {car.timeUpTo100 !== null && (
                      <CarStyle.InfoText>{t('pages.garage.car.timeUpTo100')}</CarStyle.InfoText>
                    )}
                    {car.timeUpTo100 !== null && <CarStyle.InfoText>{car.timeUpTo100} сек.</CarStyle.InfoText>}
                  </CarStyle.InfoWrapper>
                </>
              )}
            </CarStyle.HeaderBottom>
          </>
        ) : (
          <CarStyle.HeaderBottom>
            <Img width={250} height={250} />
            <CarStyle.YSeparator />
            <CarStyle.InfoWrapper>
              <Text width={210} height={55} />
              <CarStyle.XSeparator />
              <Text width={90} height={30} />
            </CarStyle.InfoWrapper>
            <CarStyle.YSeparator />
            <CarStyle.InfoWrapper>
              <CarStyle.InfoText>{t('pages.garage.car.year')}</CarStyle.InfoText>
              <Text width={50} height={25} />
              <CarStyle.XSeparator />
              <CarStyle.InfoText>{t('pages.garage.car.maxSpeed')}</CarStyle.InfoText>
              <Text width={120} height={25} />
              <CarStyle.XSeparator />
              <CarStyle.InfoText>{t('pages.garage.car.timeUpTo100')}</CarStyle.InfoText>
              <Text width={95} height={25} />
            </CarStyle.InfoWrapper>
          </CarStyle.HeaderBottom>
        )}
      </CarStyle.Header>
      <CarStyle.BodyWrapper>
        <CarStyle.BodyTxt>
          {car ? (
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate enim non obcaecati quod soluta suscipit vitae voluptatum? Animi aperiam asperiores at consectetur culpa cupiditate debitis eligendi est eum excepturi expedita incidunt laboriosam magni maiores maxime modi non quae quas quasi quisquam repellat repudiandae, sapiente vel veniam vero. Accusamus aliquam autem cumque, eius est ex maiores possimus quo repellat. A adipisci alias aperiam architecto blanditiis distinctio enim, eveniet explicabo fugit labore maiores maxime minima nobis non praesentium quis repellendus rerum saepe sit ut! Ab accusantium doloremque dolores fugit numquam officia perspiciatis quia repellendus saepe voluptate? Id, molestias mollitia! Ad, necessitatibus.'
          ) : (
            <>
              <Text width={'100%'} height={25} />
              <Text width={'100%'} height={25} />
              <Text width={'59%'} height={25} />
            </>
          )}
        </CarStyle.BodyTxt>
      </CarStyle.BodyWrapper>
      {car && <EditModal car={car} show={showModal} setShow={setShowModal} />}
    </CarStyle.Container>
  );
};
