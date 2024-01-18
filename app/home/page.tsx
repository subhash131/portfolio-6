import DigitalProduct from "@/components/digital_product/DigitalProduct";
import ImmersiveExperience from "@/components/immersive_experience/ImmersiveExperience";
import WebDeveloper from "@/components/web_developer/WebDeveloper";
import WorkedWith from "@/components/worked_with/WorkedWith";
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
