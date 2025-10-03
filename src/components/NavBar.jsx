import React, { useContext } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import ThemeContext from "@/context/ThemeContext";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

const NavBar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className="w-full bg-blue-200 dark:bg-pink-500">
      <div className="max-w-7xl mx-auto p-4 flex justify-between">
        <div className="flex gap-4 items-center text-2xl font-semibold">
          <img
            src="logo.webp"
            alt="Logo"
            className="rounded-full w-10 h-10 overflow-hidden object-cover"
          />
          <h1 className="hidden md:block">Electronic Store</h1>
        </div>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem className="space-x-6 text-lg font-semibold">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <aside className="flex space-x-4">
          <Button variant="secondary" className="cursor-pointer">Login</Button>
          <button onClick={toggleTheme} className="text-2xl cursor-pointer">
            {theme === "dark" ? <IoSunny /> : <IoMdMoon />}
          </button>
        </aside>
      </div>
    </nav>
  );
};

export default NavBar;
