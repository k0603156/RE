import React from "react";
import { connect } from "react-redux";
import { RootStateType } from "@Store/modules";
import BoardPresenter from "./BoardPresenter";
import { withRouter, RouteComponentProps } from "react-router-dom";
interface IProps extends RouteComponentProps<{ boardName: string }> {
  postlist: RootStateType["postlist"];
}
const BoardContainer = withRouter((props: IProps) => {
  const POST_LENGTH: number = 100;
  const POST_PER_PAGE: number = 10;
  const LENGTH_PAGE: number = POST_LENGTH / POST_PER_PAGE;
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  React.useEffect(() => {
    console.log(props.postlist);
  }, []);
  const handlePage = (e: any) => {
    e.persist();
    setCurrentPage(parseInt(e.currentTarget.dataset.page));
  };

  return (
    <BoardPresenter
      handlePage={handlePage}
      lengthPage={LENGTH_PAGE}
      currentPage={currentPage}
      postList={props.postlist}
    />
  );
});

export default connect(
  ({ postlist, loading }: RootStateType) => ({
    postlist
  }),
  {}
)(BoardContainer);
