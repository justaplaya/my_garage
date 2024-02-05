import { Props } from '../types';
import { StringSchema } from 'yup';
import { SetState } from 'global/typesWithImports';

export namespace CreateUpdateProps {
  export type GetStates = {
    props: Props.Common;
  };
}

export type InputHandler = {
  validator: StringSchema;
  change: SetState<string>;
};
