import React, { useState, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { authContext } from "../../context/authContext";

function Navbar() {
  const isAdmin = true ? localStorage.getItem("isAdmin") === "true" : false;
  const isUserLoggedIn = true
    ? localStorage.getItem("token") !== "null"
    : false;
  const { user, token } = useContext(authContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const profilePic =
    "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Use useLocation to get the current path
  const location = useLocation();

  // Check if the current path is /login or /admin/adminlogin
  const isLoginPage = location.pathname === "http://127.0.0.1:5173/";
  const isAdminLoginPage = location.pathname === "/admin/add-flight";

  return (
    <header className="bg-white px-[30px] md:px-[30px]">
      <nav className="flex justify-between items-center w-full max-w-[1800px] mx-auto mt-5 z-[10]">
        <Link to={"/"}>
          <div className="font-bold text-3xl">AA</div>
        </Link>

        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
            menuOpen ? "top-[8%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5 z-[10]`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {isLoginPage && (
              // Only render Search Flights link on /login page
              <li>
                <Link to={"/search"} className="hover:text-gray-500" href="#">
                  Search Flights
                </Link>
              </li>
            )}
            {isAdminLoginPage && (
              // Render the menu for /admin/adminlogin
              <>
                <li>
                  <Link
                    to={"/admin/add-airline"}
                    className="hover:text-gray-500"
                    href="#"
                  >
                    Add Airline
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to={"/admin/verify-ticket"}
                    className="hover:text-gray-500"
                    href="#"
                  >
                    Tickets
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/verify-ticket/:ticketId"}
                    className="hover:text-gray-500"
                    href="#"
                  >
                    Verifications
                  </Link>
                </li> */}
              </>
            )}
          </ul>
        </div>

        <div className="flex items-center gap-6">
          {isUserLoggedIn ? (
            <Link to={isAdmin ? "/admin" : "/profile"}>
              <img
                src={profilePic}
                alt="Profile"
                className="w-[50px] h-[50px] rounded-full"
              />
            </Link>
          ) : (
            <Link to={"/login"}>
              <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                Sign in
              </button>
            </Link>
          )}
          <RxHamburgerMenu
            onClick={toggleMenu}
            name={menuOpen ? "close" : "menu"}
            className="text-3xl cursor-pointer md:hidden"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
