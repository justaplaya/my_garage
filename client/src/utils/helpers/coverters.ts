import { isNullish } from './checks';

/** !isNullish(arg) ? String(arg) : ''  */
export const toStr = (arg): string => (!isNullish(arg) ? String(arg) : '');
