import Hero from "../Components/HomeComponents/Hero/Hero";
import FeaturedDestination from "../Components/HomeComponents/FeaturedDestination/FeaturedDestination";
import ExclusiveOffer from "../Components/HomeComponents/ExclusiveOffers/ExclusiveOffer";
import Testimonial from "../Components/HomeComponents/Testimonial/Testimonial";
import Newsletter from "../Components/HomeComponents/Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOffer/>
      <Testimonial/>
      <Newsletter/>
    </div>
  )
}

export default Home;
