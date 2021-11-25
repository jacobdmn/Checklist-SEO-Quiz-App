import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='checklist__intro__container'>
      <h1>
        Use these scored checklists to increase your conversion rate and
        revenue.
      </h1>
      <ul className='checklist__ul'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? "Selected" : "")}>
            General Checklist
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/landing-pages'
            className={({ isActive }) => (isActive ? "Selected" : "")}>
            Landing Pages
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home-pages'
            className={({ isActive }) => (isActive ? "Selected" : "")}>
            Home Pages
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/product-pages'
            className={({ isActive }) => (isActive ? "Selected" : "")}>
            Product Pages
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/cart-pages'
            className={({ isActive }) => (isActive ? "Selected" : "")}>
            Cart Pages
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
