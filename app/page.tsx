"use client"
import WebDeveloper from "@/components/home/web_developer/WebDeveloper";
import DigitalProduct from "@/components/home/digital_product/DigitalProduct";
import ImmersiveExperience from "@/components/home/immersive_experience/ImmersiveExperience";
import WorkedWith from "@/components/home/worked_with/WorkedWith";
// import { useStateContext } from "@/context/StateContext";

export default function Home() {
  // const s = useStateContext();
  return (
    <>
      <WebDeveloper />
      <DigitalProduct />
      <ImmersiveExperience />
      <WorkedWith />
    </>
  );
}
