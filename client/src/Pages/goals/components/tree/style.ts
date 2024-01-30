import styled, { css } from 'styled-components';
import { blurredBack } from 'mixins';
import { GoalStatus } from '../../models/goal';
import { useGoalStatusToColor } from '../../utils';

export namespace Tree {
  export const Container = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    ${blurredBack()};
    gap: 10px;
    padding: 15px;
    transition: all 0.3s ease-in-out;
    background: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary(0.5) : props.theme.colors.primary(0.5)};
  `;

  const GoalHeight = 35;
  export const Goal = styled.div<{ $status: GoalStatus; $draggedOverDown: boolean; $isFinished: boolean }>`
    transition: all 0.3s ease-in-out;
    position: relative;
    display: grid;
    grid-template: 100% / ${`${GoalHeight}px`} 1fr ${`${GoalHeight}px`};
    text-align: left;
    white-space: nowrap;
    width: 95%;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 10px;
    padding: 5px;
    font-weight: 700;
    font-size: 20px;
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
    border-radius: 5px;
    height: ${`${GoalHeight}px`};
    background: ${({ $status }) => `linear-gradient(to top, rgba(245,245,245,0.5), ${useGoalStatusToColor($status)});`};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 10px 2.5px;
    ${({ $draggedOverDown }) =>
      $draggedOverDown &&
      css`
        box-shadow: rgba(0, 0, 0, 0.75) 0px 5px 10px 2.5px;
      `};
    > * {
      pointer-events: none;
    }
    svg {
      transition: all 0.3s ease-in-out;

      fill: ${(props) =>
        props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
      height: ${`${GoalHeight}px`};
      ${({ $isFinished }) =>
        $isFinished &&
        css`
          fill: ${(props) =>
            props.theme.theme === 'dark' ? props.theme.colors.primaryContrast() : props.theme.colors.primary()};
        `};
    }
  `;
  export const GoalTitle = styled.h5`
    text-overflow: ellipsis;
    overflow: hidden;
  `;
  const FolderHeight = '40px';
  export const Folder = styled.div<{ $background: string; $draggedOverDown: boolean }>`
    position: relative;
    width: 100%;
    background: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.secondary(0.5) : props.theme.colors.secondary(0.5)};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 10px 2.5px;
    ${({ $draggedOverDown }) =>
      $draggedOverDown &&
      css`
        box-shadow: rgba(0, 0, 0, 0.75) 0px 5px 10px 2.5px;
      `};
    display: grid;
    grid-template: 30px / auto 1fr auto;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 5px;
    height: ${FolderHeight};
    transition: all 0.3s ease-in-out;
    > * {
      pointer-events: none;
    }
    padding: 5px;
    font-weight: 700;
    font-size: 20px;
    gap: 10px;
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primaryContrast() : props.theme.colors.primary()};
  `;
  const ImgStyle = css`
    object-fit: cover;
    height: 100%;
    transition: all 0.3s ease-in-out;
    opacity: 0.75;
  `;
  export const FolderIconWrap = styled.img`
    ${ImgStyle};
  `;
  export const FolderArrowWrap = styled.img<{ $closed: boolean }>`
    ${ImgStyle};

    ${({ $closed }) =>
      $closed
        ? css`
            transform: rotate(180deg);
          `
        : css`
            transform: rotate(90deg);
          `}
  `;
  export const GoalImportanceImgWrap = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    font-weight: 700;
    > svg {
      height: 100%;
      width: 100%;

      fill: ${(props) =>
        props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
    }
  `;
}
