import Button from "@/components/button/Button";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-5">
      <h1 className="text-6xl mb-24 text-center">Let&apos;s Keep in Touch</h1>
      <div className="flex flex-col md:flex-row items-center gap-24">
        <div className="flex-1 relative h-96">
          <Image
            src="/contact.png"
            alt="Contact Image"
            width={450}
            height={450}
            className="object-contain animate-pulse"
          />
        </div>

        <form className="flex-1 flex flex-col gap-5">
          <input
            type="text"
            placeholder="name"
            className="p-3 bg-transparent border-2 border-primBorder outline-none text-primBorder text-xl"
          />
          <input
            type="text"
            placeholder="email"
            className="p-3 bg-transparent border-2 border-primBorder outline-none text-primBorder text-xl"
          />
          <textarea
            placeholder="message"
            cols={30}
            rows={10}
            className="p-3 bg-transparent border-2 border-primBorder outline-none text-primBorder text-xl"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;