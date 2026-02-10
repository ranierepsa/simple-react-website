import AboutSectionView from "../about-section/AboutSectionView";
import AddressSectionView from "../address-section/AddressSectionView";
import HeroSectionView from "../hero-section/HeroSectionView";
import ReviewSectionView from "../review-section/ReviewSectionView";
import VisionSectionView from "../vision-section/VisionSectionView";

function HomePageView() {
  return (
    <>
        <HeroSectionView/>
        <AboutSectionView/>
        <VisionSectionView/>
        <ReviewSectionView/>
        <AddressSectionView/>
    </>
  );
}

export default HomePageView;