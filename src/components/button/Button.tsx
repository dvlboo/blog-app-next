import Link from "next/link";

interface ButtonProps {
  text: string;
  url: string;
}

const Button = ({ text, url }: ButtonProps) => {
  return (
    <Link href={url}>
      <button className="px-5 py-4 cursor-pointer bg-primGreen border-none rounded-md w-max text-white hover:bg-hovGreen">
        {text}
      </button>
    </Link>
  );
};

export default Button;