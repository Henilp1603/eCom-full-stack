import React from "react";
import NavDropDown from "./NavDropDown";
import SearchBar from "./SearchBar";
import AuthModal from "../Authentication/AuthModal";
import {Link} from "react-router-dom";
import Cartbtn from "./Cartbtn";
import {useCookies} from "react-cookie";

export default function Navbar() {
  const [cookie, setCookie] = useCookies(["token"]);

  return (
    <>
      <div className="flex items-center justify-between w-full px-10 py-2 border-b navbar-container max-h-24">
        <div className="flex items-center w-12 h-12 gap-x-8">
          <img
            src="logo.png"
            alt="Gujarat Sales Logo"
            className="object-cover w-full h-full aspect-square"
          />
          <div className="flex font-sans font-semibold menu gap-x-8 max-md:hidden">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="products">
              <span>Products</span>
            </Link>
            <NavDropDown navItem={<span role="button">Category</span>} />
            <Link to="contect">
              <span role="button">Contact</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="search max-md:hidden">
            <SearchBar />
          </div>
          <div className="flex items-center justify-center gap-3 cta">
            {cookie.token ? <Cartbtn /> : <AuthModal />}
          </div>
        </div>
      </div>
    </>
  );
}
