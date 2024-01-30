import { useTree } from './useTree';
import React, { Fragment } from 'react';
import FolderIcon from 'img/goals/folder.png';
import ArrowIcon from 'img/goals/arrow.png';
import { Tree as Style } from './style';
import { ReactComponent as CheckboxIcon } from 'img/goals/checkbox.svg';
import { Props } from './types';
import { goalImportanceToImg } from '../../utils';

export const Tree = ({ focusedId, setFocusedId, openedFolderIds, setOpenedFolderIds }: Props) => {
  const { displayedFolders, getDisplayedGoals, getFolderProps, getGoalProps } = useTree({
    focusedId,
    setFocusedId,
    openedFolderIds,
    setOpenedFolderIds,
  });
  const { Goal, Folder, FolderIconWrap, FolderArrowWrap, GoalImportanceImg, GoalImportanceImgWrap, GoalTitle } = Style;
  // const isOpenedFolder = (id: string) => openedFolderIds.includes(id);
  return (
    <Style.Container>
      {displayedFolders.map((folder) => (
        <Fragment key={folder.id}>
          <Folder {...getFolderProps(folder)}>
            <FolderIconWrap src={FolderIcon} />
            <p>{folder.title}</p>
            <FolderArrowWrap src={ArrowIcon} $closed={folder.isOpened} />
          </Folder>
          {folder.isOpened &&
            getDisplayedGoals(folder.id).map((goal) => (
              <Goal key={goal.id} {...getGoalProps(goal, folder.id)}>
                <CheckboxIcon />
                <GoalTitle>{goal.title}</GoalTitle>
                <GoalImportanceImgWrap>
                  <GoalImportanceImg src={goalImportanceToImg(goal.importance)} />
                </GoalImportanceImgWrap>
              </Goal>
            ))}
        </Fragment>
      ))}
    </Style.Container>
  );
};
