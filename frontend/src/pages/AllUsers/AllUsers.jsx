import React, { useEffect } from "react";
import { getUsers } from "../../redux/actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledTitle,
} from "./StyledAllUsers";
import User from "../../components/User/User";

function AllUsers() {
  const dispatch = useDispatch();
  const { users } = useSelector((selector) => selector.adminReducer);
  const admins = users?.filter((user) => user.role === "ADMIN");
  const notAdmins = users?.filter((user) => user.role !== "ADMIN");

  useEffect(() => {
    getUsers(dispatch);
  }, []);

  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledTitle>admins</StyledTitle>
        {users?.length &&
          admins.map((user) => <User key={user.id} user={user} />)}
      </StyledInnerWrapper>
      <StyledInnerWrapper>
        <StyledTitle>users</StyledTitle>
        {users?.length &&
          notAdmins.map((user) => <User key={user.id} user={user} />)}
      </StyledInnerWrapper>
    </StyledWrapper>
  );
}

export default AllUsers;
