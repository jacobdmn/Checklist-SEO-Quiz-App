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
            to='/general'
            className={(isSelected) => (isSelected ? "Selected" : "")}>
            General Checklist
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/landing-pages'
            className={(isSelected) => (isSelected ? "Selected" : "")}>
            Landing Pages
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home-pages'
            className={(isSelected) => (isSelected ? "Selected" : "")}>
            Home Pages
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/product-pages'
            className={(isSelected) => (isSelected ? "Selected" : "")}>
            Product Pages
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/cart-pages'
            className={(isSelected) => (isSelected ? "Selected" : "")}>
            Cart Pages
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
