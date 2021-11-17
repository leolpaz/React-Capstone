import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillSetting, AiOutlineArrowLeft } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';

const Nav = () => {
  const { pathname } = useLocation();

  const findPath = () => {
    let valid = true;
    let placeholder = '';
    if (pathname === '/') {
      valid = false;
      placeholder = 'Home';
    }
    if (valid === true) {
      return pathname.slice(1, pathname.length);
    }
    return placeholder;
  };

  return (
    <div className="nav d-flex justify-content-between align-items-start">
      {pathname === '/' ? <span><BsCoin /></span> : <Link data-testid="back-arrow" to="./"><AiOutlineArrowLeft /></Link>}
      <span>{findPath()}</span>
      <span><AiFillSetting /></span>
    </div>
  );
};

export default Nav;
