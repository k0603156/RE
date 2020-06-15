import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootStateType } from "client/configureStore";
import {
  boardSelectAction,
  boardlistBrowseAction,
  postlistBrowseAction,
} from "./actions";
import { pickBoardSelector, boardlistSelector } from "./selectors";
import MainTemplate from "client/components/templates/MainTemplate";

export interface IProps {
  boards: RootStateType["main"]["boards"];
  pickedBoard: {
    id: number;
    name: string;
    rows: RootStateType["main"]["posts"];
  };
  boardSelectAction: typeof boardSelectAction;
  boardlistBrowseAction: typeof boardlistBrowseAction;
  postlistBrowseAction: typeof postlistBrowseAction;
}
const MainContainer = ({
  boards,
  pickedBoard,
  boardSelectAction,
  boardlistBrowseAction,
  postlistBrowseAction,
}: IProps) => {
  const fetchCarouselData = () => {
    !boards.length && boardlistBrowseAction();
    postlistBrowseAction(pickedBoard.id);
  };
  useEffect(() => fetchCarouselData(), [pickedBoard.id]);

  return (
    <MainTemplate
      boards={boards}
      pickedBoard={pickedBoard}
      boardSelectAction={boardSelectAction}
    />
  );
};

export default connect(
  (state: RootStateType) => ({
    boards: boardlistSelector(state),
    pickedBoard: pickBoardSelector(state),
  }),
  {
    boardSelectAction,
    boardlistBrowseAction,
    postlistBrowseAction,
  },
)(MainContainer);
