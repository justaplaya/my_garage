import { Card } from './card';
import { Props } from './types';
import { IncidentList } from './style';

export const List = ({ incidents }: Props.List) => {
  return (
    <IncidentList>
      {incidents.map((incident) => (
        <Card incident={incident} key={incident.id} />
      ))}
    </IncidentList>
  );
};
