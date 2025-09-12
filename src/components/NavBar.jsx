import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-4 items-center text-2xl font-semibold">
        <img
          src="logo.webp"
          alt="Logo"
          className="rounded-full w-20 h-20 overflow-hidden object-cover"
        />
        <h1>Electronic Store</h1>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="space-x-2">
            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex space-x-4">
        <button type="button">Login</button>
        <button type="button">Register</button>
        <button>Theme</button>
      </div>
    </nav>
  );
};

export default NavBar;
