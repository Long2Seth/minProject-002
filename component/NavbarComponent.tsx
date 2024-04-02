
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import myArray from "@/component/pathNavbar";
import { usePathname } from "next/navigation";



function NavbarComponent() {
  const path = usePathname();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>


        {myArray.map(
          (item) => (
            <Navbar.Link className=" text-lg font-semibold" href={item.path} active={item.path == path}>
              {item.title}
            </Navbar.Link>
            )
          )
        }

      </Navbar.Collapse>
    </Navbar>
  );
}


export default NavbarComponent;