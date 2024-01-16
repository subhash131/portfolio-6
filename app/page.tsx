import Perspective3d from "@/components/3dPerspective/Perspective3d";
import Background from "@/components/background/Background";

export default function Home() {
  return (
    <Perspective3d className="h-screen w-screen overflow-hidden bg-black grid place-content-center">
      <Background className="bg-[#181E12] p-2">
        <Perspective3d className="w-full h-10 bg-[#2F2F2F] rounded flex items-center p-4">
          <div className="flex gap-2">
            <Perspective3d className="w-3 h-3 rounded-full bg-[#666666]"></Perspective3d>
            <Perspective3d className="w-3 h-3 rounded-full bg-[#666666]"></Perspective3d>
            <Perspective3d className="w-3 h-3 rounded-full bg-[#666666]"></Perspective3d>
          </div>
        </Perspective3d>
      </Background>
    </Perspective3d>
  );
}
