import "./Sidebar.css";
import { GiShop } from "react-icons/gi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { CgStack } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { BsShop } from "react-icons/bs";
import { TbCurrencyDollar } from "react-icons/tb";
import { IoIosStats } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { IoAnalyticsSharp } from "react-icons/io5";
import { PiWarningOctagonFill } from "react-icons/pi";
function Sidebar() {
  return (
    <div className={"sidebar-container"}>
      {/* <h1 className={"nav-div"}>OpenReplay</h1> */}
      <div className="nav-div">
        <div>
          <h2 className="nav-h2">Dashboard</h2>
          <ul style={{ listStyleType: "none" }}>
            <li className="nav-li">
              <GiShop />
              Home
            </li>
            <li className="nav-li">
              <IoAnalyticsOutline />
              Analytics
            </li>
            <li className="nav-li">
              <HiMiniArrowTrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div>
          <h2 className="nav-h2">Quick Menu</h2>
          <ul style={{ listStyleType: "none" }}>
            <li className="nav-li">
              <CiUser />
              Users
            </li>
            <li className="nav-li">
              <BsShop />
              Products
            </li>
            <li className="nav-li">
              <TbCurrencyDollar />
              Transactions
            </li>
            <li className="nav-li">
              <IoIosStats />
              Reports
            </li>
          </ul>
        </div>
        <div>
          <h2 className="nav-h2">Notification</h2>
          <ul style={{ listStyleType: "none" }}>
            <li className="nav-li">
              <IoMailOutline />
              Mail
            </li>
            <li className="nav-li">
              <CgStack />
              Feedack
            </li>
            <li className="nav-li">
              <FiMessageSquare />
              Messages
            </li>
          </ul>
        </div>
        <div>
          <h2 className="nav-h2">Staff</h2>
          <ul style={{ listStyleType: "none" }}>
            <li className="nav-li">
              <PiSuitcaseSimpleThin />
              Manage
            </li>
            <li className="nav-li">
              <IoAnalyticsSharp />
              Analytics
            </li>
            <li className="nav-li">
              <PiWarningOctagonFill />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
