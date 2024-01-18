"use client";
import Perspective3d from "@/components/perspective_3d/Perspective3d";
import Background from "@/components/background/Background";
import TitleBar from "@/components/titlebar/Titlebar";
import WebDeveloper from "@/components/web_developer/WebDeveloper";
import DigitalProduct from "@/components/digital_product/DigitalProduct";
import ImmersiveExperience from "@/components/immersive_experience/ImmersiveExperience";
import WorkedWith from "@/components/worked_with/WorkedWith";
import Menu from "@/components/menu/Menu";
import { useStateContext } from "@/context/StateContext";

export default function Home() {
  const s = useStateContext();
  return (
    <>
      <WebDeveloper />
      <DigitalProduct />
      <ImmersiveExperience />
      <WorkedWith />
    </>
  );
}
