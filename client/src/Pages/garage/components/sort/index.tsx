import React, { useRef } from 'react';
import { Container, Placeholder, Wrapper, Option } from './style';
import { SortOptionType, useSortOptions } from 'Pages/garage/utils';
import { useOnClickOutside } from 'Hooks/useOnClickOutside';
import { Props } from './types';

export const Sort = ({ showSort, setShowSort, sortValue, setSortValue }: Props) => {
  const sortOptions = useSortOptions();
  const sortContainer = useRef<HTMLDivElement>(null);

  const longOptions = [9, 10];
  const placeholder = sortValue?.text ?? '';

  useOnClickOutside(sortContainer, () => {
    setShowSort(false);
  });

  const containerClick = () => setShowSort((prev) => !prev);

  const optionClick = (option: SortOptionType) => setSortValue(option);

  const isLong = (id: number) => longOptions.includes(id);

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
