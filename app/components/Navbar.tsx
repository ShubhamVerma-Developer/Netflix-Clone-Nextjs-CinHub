"use client";

import { Search } from "@mui/icons-material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [search, setSearch] = useState<string>("");
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  const [isSrolled, setisSrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setisSrolled(true);
    } else {
      setisSrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="navbar">
      <Link href="/">
        <img src="/assets/logo.png" alt="logo" className="logo" />
      </Link>
      <div className="nav-links">
        <Link href="" className="nav-link">
          Home
        </Link>
        <Link href="/my-list" className="nav-link">
          My List
        </Link>
      </div>
      <div className="nav-right">
        <div className="search">
          <input
            placeholder="Search movie..."
            className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="icon" />
        </div>
        <img
          src="/assets/profile_icon.jpg"
          className="profile"
          alt="profile"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className="dropdown-menu">
            <Link href="/">Home</Link>
            <Link href="/my-list">my-list</Link>
            <a href="Log Out">Log Out</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
