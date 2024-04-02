
"use client";

import { Sidebar } from "flowbite-react";
import dashBoardType from "@/component/IconDashBoard";


function DashBoardComponent() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup className=" h-screen ">
          {
            dashBoardType.map((item) => (
              <Sidebar.Item href="#" icon={item.icon}>
                {item.name}
              </Sidebar.Item>
            ))
          }
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}



export default DashBoardComponent;