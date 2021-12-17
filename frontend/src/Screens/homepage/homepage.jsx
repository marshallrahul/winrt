import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Hero from "../../components/hero/hero.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Details from "../../components/details/details.component";
import Review from "../../components/review-section/review.component";
import Newsletter from "../../components/newsletter/newsletter.component";
import Footer from "../../components/footer/footer.component";
import UserActionTypes from "../../redux/user/user.types";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = () => {
      axios("http://localhost:5000/auth/login/success", {
        method: "GET",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => {
          dispatch({
            type: UserActionTypes.USER_LOGIN_SUCCESS,
            payload: data.data.user,
          });

          localStorage.setItem("userDetails", JSON.stringify(data.data.user));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, [dispatch]);
  return (
    <>
      <Hero />
      <CollectionOverview />
      <Details />
      <Review />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomePage;
