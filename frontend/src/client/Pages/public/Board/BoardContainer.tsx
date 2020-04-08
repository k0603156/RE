import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { postlistBrowseAction } from "@Store/modules/PostList/actions";
import { RootStateType } from "@Store/modules";
import BoardPresenter from "./BoardPresenter";

export interface IProps extends RouteComponentProps<{ boardName: string }> {
  postlist: RootStateType["postlist"];
  postlistBrowseAction: typeof postlistBrowseAction;
}

const BoardContainer = withRouter((props: IProps) => {
  const POST_PER_PAGE = 10;

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  React.useEffect(() => {
    props.postlistBrowseAction(currentPage);
  }, [props.match.params.boardName, currentPage]);
  const handlePage = (e: any) => {
    e.persist();
    setCurrentPage(parseInt(e.currentTarget.dataset.page));
  };
  return (
    <BoardPresenter
      handlePage={handlePage}
      lengthPage={Math.ceil(props.postlist.count / POST_PER_PAGE)}
      currentPage={currentPage}
      postlist={props.postlist.rows}
    />
  );
});

export default connect(
  ({ postlist, loading }: RootStateType) => ({
    postlist,
  }),
  { postlistBrowseAction }
)(BoardContainer);
