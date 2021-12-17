import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User, Heart, ShoppingCart } from "phosphor-react";
import Loader from "../loader/loader.component";
import Submenu from "../sub-menu/sub-menu.component";
import { logout } from "../../redux/user/user.action";
import {
  WrapperContianer,
  Logo,
  NavContainer,
  NavLinks,
  NavIconContainer,
  NavIcons,
  CheckBtn,
  Label,
  CheckBox,
  LogoutContainer,
  AdminContainer,
  DropdownSub,
  AdminCheckbox,
} from "./header.style";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  if (loading) return <Loader />;
  return (
    <Fragment>
      <WrapperContianer>
        <CheckBox type="checkbox" id="check" style={{ display: "none" }} />
        <Logo>WINRT</Logo>
        <Label htmlFor="check" className="menu-btn">
          <CheckBtn className="fas fa-bars"></CheckBtn>
        </Label>
        <NavContainer className="nav-links">
          <NavLinks to="/" className="nav__links">
            Home
          </NavLinks>
          <NavLinks to="/collections" className="nav__links">
            Bikes
          </NavLinks>
          <NavLinks to="/" className="nav__links">
            Our Stories
          </NavLinks>
          <NavLinks to="/" className="nav__links">
            Pages
          </NavLinks>
          <NavLinks to="/" className="nav__links">
            Portfolio
          </NavLinks>
          {userInfo ? (
            <>
              <AdminCheckbox
                type="checkbox"
                name="admin"
                id="admin"
                style={{ display: "none" }}
              />
              {userInfo.isAdmin && (
                <AdminContainer htmlFor="admin" className="nav__admin">
                  Admin <i class="fa-solid fa-plus"></i>
                </AdminContainer>
              )}
              <DropdownSub className="section-dropdown">
                <div>Users</div>
                <div>Products</div>
                <div>Orders</div>
              </DropdownSub>
              <NavLinks to="/" className="user__name">
                {userInfo.name}
              </NavLinks>
              <LogoutContainer onClick={logoutHandler}>Logout</LogoutContainer>
            </>
          ) : (
            <NavLinks to="/signin" className="nav__links nav__links--login">
              Login
            </NavLinks>
          )}
        </NavContainer>
        <NavIconContainer>
          <NavIcons>
            <User size={18} />
            <Submenu />
          </NavIcons>
          <NavIcons>
            <Heart size={18} />
          </NavIcons>
          <NavIcons onClick={() => navigate("/cart")}>
            <ShoppingCart size={18} />
          </NavIcons>
        </NavIconContainer>
      </WrapperContianer>
    </Fragment>
  );
};

export default Header;
