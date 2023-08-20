import { ObjOfRefs, Props } from '../types';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IncidentPeriod } from 'Pages/garage/models/car';

export const useHeader = ({ period, pickPeriod, baseLeftOffset }: Props.Header) => {
  const { t, i18n } = useTranslation();

  const refs: ObjOfRefs = {
    week: useRef(null),
    month: useRef(null),
    year: useRef(null),
  };

  const [coords, setCoords] = useState<DOMRect | undefined>();

  useEffect(() => {
    const periodRef = refs[period].current;
    periodRef && setCoords(periodRef.getBoundingClientRect());
  }, [period, i18n.language, refs.week, refs.month, refs.year]);

  const text = {
    title: t('incidents.incidents'),
    periods: (period: IncidentPeriod) => t(`incidents.periods.${period}`),
  };

  const props = {
    period: (item: IncidentPeriod) => ({ $active: period === item, ref: refs[item], onClick: pickPeriod(item) }),
    activeLine: {
      $width: coords?.width ?? 0,
      $offset: (coords?.left ?? baseLeftOffset) - baseLeftOffset,
    },
  };

  return { text, props };
};
