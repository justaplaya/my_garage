import React, { useRef } from 'react';
import { Container, Placeholder, Wrapper, Option } from './style';
import { SortOptionType, useSortOptions } from 'Pages/garage/utils';
import { SetState } from 'utils/types';
import { useOnClickOutside } from 'Hooks/useOnClickOutside';

type Props = {
  showSort: boolean;
  setShowSort: SetState<boolean>;
  sortValue: SortOptionType;
  setSortValue: SetState<SortOptionType>;
};

export const Sort = ({ showSort, setShowSort, sortValue, setSortValue }: Props) => {
  const sortOptions = useSortOptions();
  const containerClick = () => setShowSort((prev) => !prev);
  const optionClick = (option: SortOptionType) => setSortValue(option);
  const sortContainer = useRef<HTMLDivElement>(null);
  useOnClickOutside(sortContainer, () => {
    setShowSort(false);
  });
  const longOptions = [9, 10];
  const isLong = (id: number) => longOptions.includes(id);
  const placeholder = sortValue?.text ?? '';
  return (
    <Container onClick={containerClick} ref={sortContainer}>
      <Placeholder $smallFontSize={isLong(sortValue.id)}>{placeholder}</Placeholder>
      <Wrapper $show={showSort}>
        {sortOptions.map((option, index) => {
          const props = { onClick: () => optionClick(option), $smallFontSize: isLong(option.id) };
          return (
            <Option key={index} {...props}>
              {option.text}
            </Option>
          );
        })}
      </Wrapper>
    </Container>
  );
};
