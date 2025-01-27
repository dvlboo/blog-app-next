"use client";

import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="container mx-auto h-[100px] flex justify-between items-center">
      <Link href="/" className="font-bold text-[22px]">
        xKhai
      </Link>
      <div className="flex items-center gap-[20px]">
        {/* <DarkModeToggle /> */}
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {/* {session.status === "authenticated" && ( */}
          <button
            className="px-4 py-2 bg-primGreen text-white rounded cursor-pointer hover:bg-hovGreen"
            // onClick={signOut}
          >
            Logout
          </button>
        {/* )} */}
      </div>
    </div>

  )
}

export default Navbar;