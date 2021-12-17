import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserActionTypes from "../../redux/user/user.types";
import Loader from "../loader/loader.component";
import { SubMenuContainer, SubMenuItems } from "./sub-menu.style";

const Submenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;

  return (
    <div>
      {loading && <Loader />}
      <SubMenuContainer>
        {userInfo && (
          <>
            {" "}
            {userInfo.isAdmin ? (
              <SubMenuItems onClick={() => navigate("/")}>
                Dashboard
              </SubMenuItems>
            ) : (
              <SubMenuItems onClick={() => navigate("/")}>
                {userInfo.name}
              </SubMenuItems>
            )}
          </>
        )}
        {userInfo ? (
          <SubMenuItems
            onClick={() => {
              dispatch({ type: UserActionTypes.USER_LOGOUT });
            }}
          >
            Logout
          </SubMenuItems>
        ) : (
          <SubMenuItems onClick={() => navigate("/signin")}>
            User Login
          </SubMenuItems>
        )}
      </SubMenuContainer>
    </div>
  );
};

export default Submenu;
