
import {
    HiChartPie,
    
  } from "react-icons/hi";
  import { IoIosCreate } from "react-icons/io";
  import { AiFillHome } from "react-icons/ai";

const dashBoardType = [
    {
        name: 'Dashboard',
        icon: HiChartPie,
        path: '/dashboard'
    },
    {
        name: 'Create',
        icon: IoIosCreate,
        path : '/createproduct'
    },
    {
        name: 'Home',
        icon: AiFillHome,
        path : '/'
    }
    
]



export default dashBoardType;