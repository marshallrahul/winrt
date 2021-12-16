import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/hero/hero.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Details from "../../components/details/details.component";
import Review from "../../components/review-section/review.component";
import Newsletter from "../../components/newsletter/newsletter.component";
import Footer from "../../components/footer/footer.component";

import { googleLogin, facebookLogin } from "../../redux/user/user.action";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(googleLogin());
    dispatch(facebookLogin());
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
