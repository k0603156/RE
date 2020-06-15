import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { RootStateType } from "client/configureStore";
import { profileSelectAction } from "./actions";
import ProfileTemplate from "client/components/templates/ProfileTemplate";

export interface IProps
  extends RouteComponentProps<{ searchUserName: string }> {
  profile: RootStateType["profile"];
  loadingProfile: boolean;
  profileSelectAction: typeof profileSelectAction;
}
const ProfileContainer = withRouter(
  ({
    match: {
      params: { searchUserName },
    },
    profile,
    loadingProfile,
    profileSelectAction,
  }: IProps) => {
    useEffect(() => {
      profileSelectAction(searchUserName);
    }, [searchUserName]);

    return (
      <div>{!loadingProfile && <ProfileTemplate profile={profile} />}</div>
    );
  },
);
export default connect(
  ({ profile, loading }: RootStateType) => ({
    profile,
    loadingProfile: loading["profile/PROFILE_SELECT_REQUEST"],
  }),
  { profileSelectAction },
)(ProfileContainer);
