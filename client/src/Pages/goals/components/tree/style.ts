import styled, { css } from 'styled-components';
import { blurredBack } from '../../../../mixins';
import { GoalStatus } from '../../models/goal';
import { goalStatusToColor } from '../../utils';

export namespace Tree {
  export const Container = styled.div`
    display: flex;
    align-items: flex-start;
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
  export const Goal = styled.div<{ $status: GoalStatus; $draggedOverDown: boolean; $isDone: boolean }>`
    transition: all 0.3s ease-in-out;
    position: relative;
    display: grid;
    grid-template: 100% / ${`${GoalHeight}px`} 1fr ${`${GoalHeight}px`};
    //grid-template: 100% / 35px calc(100% - 70px - 20px) 35px;
    text-align: left;
    white-space: nowrap;
    width: 100%;
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
    background: ${({ $status }) => `rgb(${goalStatusToColor($status)}, 0.75)`};
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
      ${({ $isDone }) =>
        $isDone &&
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
    background: ${({ $background }) => `rgb(${$background}, 0.25)`};
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
            transform: rotate(0deg);
          `}
  `;
  export const GoalImportanceImgWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
  `;
  export const GoalImportanceImg = styled.img`
    ${ImgStyle};
    opacity: 0.75;
  `;
}
