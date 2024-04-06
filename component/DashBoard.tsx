
"use client";

import { Sidebar } from "flowbite-react";
import dashBoardType from "@/lib/IconDashBoard";
import { usePathname } from "next/navigation";
import PaginationComponent from "./PaginationComponent";


function DashBoardComponent() {
  const path = usePathname();
  return (
    <section>
      <Sidebar className=" sticky top-0 " aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {
              dashBoardType.map((item) => (
                <Sidebar.Item active={item.path === path} href={item.path} icon={item.icon}>
                  {item.name}
                </Sidebar.Item>
              ))
            }
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <PaginationComponent />
    </section>
  );
}



export default DashBoardComponent;