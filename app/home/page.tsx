import DigitalProduct from "@/components/home/digital_product/DigitalProduct";
import ImmersiveExperience from "@/components/home/immersive_experience/ImmersiveExperience";
import WebDeveloper from "@/components/home/web_developer/WebDeveloper";
import WorkedWith from "@/components/home/worked_with/WorkedWith";
import React from "react";

const Home = () => {
  return (
    <>
      <WebDeveloper />
      <DigitalProduct />
      <ImmersiveExperience />
      <WorkedWith />
    </>
  );
};

export default Home;
