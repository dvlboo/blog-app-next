import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container h-[50px] mx-auto flex justify-between">
      <div>©2025 xKhai. All rights reserved.</div>
      <div className="flex space-x-2">
        <Link href="kukuhcokro411@gmail.com"><Image src="https://img.icons8.com/color/24/gmail-new.png" width={20} height={20} alt="Gmail" /></Link>
        <Link href="https://github.com/dvlboo"><Image src="https://img.icons8.com/ios-glyphs/24/github.png" width={20} height={20} alt="Github" /></Link>
        <Link href="https://www.instagram.com/_kuhhh.ckr/"><Image src="https://img.icons8.com/fluency/24/instagram-new.png" width={20} height={20} alt="Instagram" /></Link>
      </div>
    </div>
  )
}

export default Footer;