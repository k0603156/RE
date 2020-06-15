import React from "react";
import { RootStateType } from "client/configureStore";
import { MainCarousel, MainCarouselType } from "client/components/organisms";
import { boardSelectAction } from "client/containers/Pages/public/Main/actions";
interface IProps {
  boards: MainCarouselType["boards"];
  pickedBoard: MainCarouselType["pickedBoard"];
  boardSelectAction: typeof boardSelectAction;
}
export default ({ boards, pickedBoard, boardSelectAction }: IProps) => {
  const onSelectBoard = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    boardSelectAction(Number(e.currentTarget.dataset.keyid!));
  };
  return (
    <div>
      <MainCarousel
        boards={boards}
        pickedBoard={pickedBoard}
        onSelectBoard={onSelectBoard}
      />
    </div>
  );
};
