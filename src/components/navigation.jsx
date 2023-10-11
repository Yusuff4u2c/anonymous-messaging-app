import { Link } from "react-router-dom";
// import homeLogo from "../assets/image/logo.png";
import { useState } from "react";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);
  function handlClick() {
    setIsClicked(!isClicked);
  }
  return (
    <div>
      <nav className="bg-gradient-to-r from-[#be62be] from-25% to-[#7b45d3] py-6 px-16 text-white flex justify-between items-center">
        <Link to="/home">
          <h1 className="text-2xl">HushHive</h1>
        </Link>
        <ul className="flex gap-12 text-sm font-bold relative">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li onClick={handlClick}>
            <a href="#">GET STARTED</a>

            <div
              className={`bg-white ${
                !isClicked ? "hidden" : ""
              } text-black absolute top-14 right-32`}
            >
              <ul>
                <li className="hover:bg-gradient-to-r from-[#be62be] from-25% to-[#7b45d3] border-b-2 py-4 ps-10 pe-24 hover:text-white">
                  <Link to="/login">LOG IN</Link>
                </li>
                <li className="py-4 hover:bg-gradient-to-r from-[#be62be] from-25% to-[#7b45d3] ps-10 pe-24 hover:text-white">
                  <Link to="/register">REGISTER</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
