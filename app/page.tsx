import Perspective3d from "@/components/perspective_3d/Perspective3d";
import Background from "@/components/background/Background";
import TitleBar from "@/components/titlebar/Titlebar";
import WebDeveloper from "@/components/web_developer/WebDeveloper";
import DigitalProduct from "@/components/digital_product/DigitalProduct";
import ImmersiveExperience from "@/components/immersive_experience/ImmersiveExperience";

export default function Home() {
  return (
    <Perspective3d className="h-screen w-screen overflow-hidden bg-black grid place-content-center select-none">
      <Background className="bg-[#181E12] p-2">
        <TitleBar />
        <WebDeveloper />
        <DigitalProduct />
        <ImmersiveExperience />
      </Background>
    </Perspective3d>
  );
}
