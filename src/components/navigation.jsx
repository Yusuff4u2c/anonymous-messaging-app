import { Link } from "react-router-dom";
import homeLogo from "../assets/image/logo.png";
import { useState } from "react";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  function handleHover() {
    setIsHovered(!isHovered);
  }
  return (
    <div>
      <nav className="bg-gradient-to-r from-[#be62be] from-25% to-[#7b45d3] py-6 px-16 text-white flex justify-between items-center">
        <Link to="/home">
          <img className="w-23" src={homeLogo} alt="home logo" />
        </Link>
        <ul className="flex gap-12 text-sm font-bold relative">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li onClick={handleHover}>
            <a href="#">GET STARTED</a>

            <div
              className={`bg-white ${
                !isHovered ? "hidden" : ""
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
