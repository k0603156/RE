import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { postlistBrowseAction } from "@Store/modules/PostList/actions";
import { RootStateType } from "@Store/modules";
import BoardPresenter from "./BoardPresenter";
interface IProps extends RouteComponentProps<{ boardName: string }> {
  postlist: RootStateType["postlist"];
  postlistBrowseAction: typeof postlistBrowseAction;
}
const BoardContainer = withRouter((props: IProps) => {
  const POST_LENGTH: number = 20;
  const POST_PER_PAGE: number = 10;
  const LENGTH_PAGE: number = POST_LENGTH / POST_PER_PAGE;
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  React.useEffect(() => {
    props.postlistBrowseAction(currentPage);
    console.log(props.postlist);
    console.log(currentPage);
    console.log(props.match.params.boardName);
  }, [props.match.params.boardName, currentPage]);
  const handlePage = (e: any) => {
    e.persist();
    setCurrentPage(parseInt(e.currentTarget.dataset.page));
  };
  console.log(LENGTH_PAGE);
  return (
    <BoardPresenter
      handlePage={handlePage}
      lengthPage={LENGTH_PAGE}
      currentPage={currentPage}
      postlist={props.postlist.board}
    />
  );
});

export default connect(
  ({ postlist, loading }: RootStateType) => ({
    postlist
  }),
  { postlistBrowseAction }
)(BoardContainer);
