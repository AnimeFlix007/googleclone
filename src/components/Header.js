import React from "react";
import { Link } from "react-router-dom";
import Google from "../images/googlelogo_color_92x30dp.png";
import Dark from '../images/dark.png'
import Light from '../images/light.png'
import Search from "./Search";

const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className=" p-5 pb-0 flex flex-wrap justify-center sm:justify-between items-center border-b dark:border-gray-700 border-gray-200 ">
      <div className="flex items-center space-x-5 w-screen justify-between">
        <Link to={"/"}>
          <img src={Google} alt="google" className="px-2 w-36" />
        </Link>
        <button type="button" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? (
            <img src={Light} alt="google" className=" py-1 px-2 w-12" />
          ) : (
            <img src={Dark} alt="google" className=" py-1 px-2 w-12" />
          )}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Header;
