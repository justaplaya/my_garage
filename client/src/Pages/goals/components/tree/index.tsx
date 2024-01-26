import { useTree } from './useTree';
import React, { Fragment } from 'react';
import FolderIcon from 'img/goals/folder.png';
import ArrowIcon from 'img/goals/arrow.png';
import { Tree as Style } from './style';
import { ReactComponent as CheckboxIcon } from 'img/goals/checkbox.svg';

export const Tree = () => {
  const { displayedFolders, getDisplayedGoals, getFolderProps, getGoalProps } = useTree();
  const { Goal, Folder, FolderIconWrap, FolderArrowWrap } = Style;

  return (
    <Style.Container>
      {displayedFolders.map((folder) => (
        <Fragment key={folder.id}>
          <Folder {...getFolderProps(folder)}>
            <FolderIconWrap src={FolderIcon} />
            <p>{folder.title}</p>
            <FolderArrowWrap src={ArrowIcon} $closed={folder.isClosed} />
          </Folder>
          {!folder.isClosed &&
            getDisplayedGoals(folder.id).map((goal) => (
              <Goal key={goal.id} {...getGoalProps(goal, folder.id)}>
                <CheckboxIcon />
                <h5>{goal.title}</h5>
              </Goal>
            ))}
        </Fragment>
      ))}
    </Style.Container>
  );
};
