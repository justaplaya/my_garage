export type ControllerProps<T> = {
  value: T;
  change: (value: T) => void;
  isChanged: boolean;
  setToDefault: () => void;
};
