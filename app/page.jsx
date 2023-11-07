import Banner from "@/components/home-sections/Banner";
import ChargeForm from "@/components/home-sections/ChargeForm";
import Cta from "@/components/home-sections/Cta";
import FeatureWrap from "@/components/home-sections/FeatureWrap";
import OnlinePayment from "@/components/home-sections/OnlinePayment";
import OurServices from "@/components/home-sections/OurServices";

export default function Home() {
  return (
    <>
      <Banner />
      <ChargeForm />
      <OurServices />
      <FeatureWrap />
      <OnlinePayment />
      <Cta />
    </>
  );
}
