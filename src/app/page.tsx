import Button from "@/components/button/Button";
import Image from "next/image";

const Home = () => {
  return (
    <div className="container mx-auto flex items-center">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="text-7xl font-bold bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent">
          Better design for your digital products.
        </h1>
        <p className="text-xl font-light">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className="flex-1">
        <Image
          src={'/hero.png'}
          width={500}
          height={500}
          alt="" className="w-full h-[500px] object-contain animate-pulse"
        />
      </div>
    </div>
  );
};

export default Home;
