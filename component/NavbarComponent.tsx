
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import myArray from "@/lib/pathNavbar";
import { usePathname } from "next/navigation";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";


function NavbarComponent() {
  const path = usePathname();
  const router = useRouter();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img src="https://the-next.eliterature.org/img/global/next-icon.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>


        {myArray.map(
          (item, index) => (
            <Navbar.Link className=" text-lg font-semibold" key={index} href={item.path} active={item.path == path}>
              {item.title}
            </Navbar.Link>
          )
        )
        }
        <Button onClick={() => router.push('/dashboard')} gradientDuoTone="cyanToBlue">
          Dashboard
        </Button>

      </Navbar.Collapse>
    </Navbar>
  );
}


export default NavbarComponent;