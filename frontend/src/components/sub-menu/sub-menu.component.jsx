import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/loader.component";
import { logout } from "../../redux/user/user.action";
import { SubMenuContainer, SubMenuItems } from "./sub-menu.style";

const Submenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/signin");
  };

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
              logoutHandler();
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
