import "./header.css";
import { VscAccount } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";
export const Header = () => {
  return (
    <div className="header">
      <div className="topLeft">BlogiFy</div>


      <div className="topCenter">
        <ul className="topList">
          <li className="topCenterItem">Home</li>
          <li className="topCenterItem">Write</li>
          <li className="topCenterItem">Profile</li>
          <li className="topCenterItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
            <li className="topRightItem"> <VscAccount/></li>
          <li className="topRightItem">
            <input type="text" placeholder="search here.."></input>
          </li>
          <li className="topRightItem .sizeOfIcon"><IoSearchSharp/></li>
        </ul>
      </div>
    </div>
  );
};
