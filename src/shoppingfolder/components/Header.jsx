import React from "react";

const Header = () => {
  return (
    <div className="headerSection">
      <div className="left">
        <div className="title">
          <h2>Life Style</h2>
        </div>
      </div>
      <div className="center">
        <ul>
          <li>Mens</li>
          <li>Womens</li>
          <li>Beauty</li>
          <li>Children</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="Search...." />
      </div>
      <div className="right">
        <div className="signin">SignIn / SignUp</div>
        <div className="cart">Cart</div>
      </div>
    </div>
  );
};

export default Header;
