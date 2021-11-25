import React from "react";
import Hero from "../../components/hero/hero.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Details from "../../components/details/details.component";
import Review from "../../components/review-section/review.component";
import Newsletter from "../../components/newsletter/newsletter.component";
import Footer from "../../components/footer/footer.component";

const HomePage = () => {
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
