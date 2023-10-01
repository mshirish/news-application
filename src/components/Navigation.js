import React, { useState, useEffect } from "react";
import { Select, Option } from "@material-tailwind/react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 z-50">
      <div className="w-30 text-black z-50">
        <Select
          label="Country"
          value={props.selectedCountry}
          onChange={(value) => props.onCountryChange(value)} // Call onCountryChange with the selected value
        >
          <Option value="au">Australia</Option>
          <Option value="in">India</Option>
          <Option value="us">USA</Option>
        </Select>
      </div>

      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <Link to="/business" className="flex items-center">
          Business
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <Link to="/entertainment" className="flex items-center">
          Entertainment
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <Link to="/health" className="flex items-center">
          Health
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <Link to="/science" className="flex items-center">
          Science
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <Link to="/sports" className="flex items-center">
          Sports
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <Link to="/technology" className="flex items-center">
          Technology
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mt-4 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 z-50 sticky">
      <div className="container mx-auto flex items-center justify-between text-black">
        <Typography as="a" className="mr-4 cursor-pointer py-1.5 font-bold">
          <Link to="/general" className="flex items-center">
            News
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
