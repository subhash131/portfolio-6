import Perspective3d from "@/components/perspective_3d/Perspective3d";
import Background from "@/components/background/Background";
import TitleBar from "@/components/titlebar/TitleBar";
import WebDeveloper from "@/components/web_developer/WebDeveloper";

export default function Home() {
  return (
    <Perspective3d className="h-screen w-screen overflow-hidden bg-black grid place-content-center">
      <Background className="bg-[#181E12] p-2">
        <TitleBar />
        <WebDeveloper />
      </Background>
    </Perspective3d>
  );
}
