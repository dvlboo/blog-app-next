import Button from "@/components/button/Button";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="relative w-full h-72">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className="object-cover filter grayscale rounded-md"
        />
        <div className="absolute bottom-5 left-5 bg-primGreen text-white p-2 rounded-md">
          <h1 className="text-xl font-bold">Digital Storytellers</h1>
          <h2 className="text-lg font-light">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 mt-12 flex flex-col gap-8">
          <h1 className="text-2xl font-bold">Who Are We?</h1>
          <p className="text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1 mt-12 flex flex-col gap-8">
          <h1 className="text-2xl font-bold">What We Do?</h1>
          <p className="text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <br /> - Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;