import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const userProfile = {
    name: "Nishyan",
    store: "Visit store",
    profilePhoto: "img/profile.png",
  };

  const navigation = [
    { name: "Home", href: "/", navIcon: "img/home.png" },
    { name: "Orders", href: "/", navIcon: "img/order.png" },
    { name: "Products", href: "/", navIcon: "img/products.png" },
    { name: "Delivery", href: "/", navIcon: "img/delivery.png" },
    { name: "Marketing", href: "/", navIcon: "img/marketing.png" },
    { name: "Analytics", href: "/", navIcon: "img/analytic.png" },
    { name: "Payments", href: "/", navIcon: "img/payout.png" },
    { name: "Tools", href: "/", navIcon: "img/tool.png" },
    { name: "Discounts", href: "/", navIcon: "img/discount.png" },
    { name: "Audience", href: "/", navIcon: "img/audience.png" },
    { name: "Affiliates", href: "/", navIcon: "img/affiliates.png" },
    { name: "Vendors", href: "/", navIcon: "img/vendors.png" },
    { name: "Appearance", href: "/", navIcon: "img/appearance.png" },
    { name: "Plugins", href: "/", navIcon: "img/plugins.png" },
  ];

  const [active, setActive] = useState("nav-links");

  const handleClick = (link) => {
    setActive(link);
  };

  return (
    <div className="sidebar">
      <div className="top-content">
        <div className="profile">
          <Link to={"/"}>
            <img src={userProfile.profilePhoto} alt="Profile" />
            <div className="info">
              <h3>{userProfile.name}</h3>
              <Link to={"/"}>
                <span>{userProfile.store}</span>
              </Link>
            </div>
          </Link>
          <div className="arrow">
            <img src="img/Vector.svg" alt="down" />
          </div>
        </div>

        <div className="nav">
          {navigation.map((item) => (
            <Link
              onClick={() => handleClick(item.name)}
              key={item.name}
              to={item.href}
            >
              <div
                className={
                  active === item.name ? "nav-links-active" : "nav-links"
                }
              >
                <img src={item.navIcon} alt={item.name} />
                {item.name}
              </div>
            </Link>
          ))}

          <div className="bottom-content">
            <div className="wallet">
              <img src="img/wallet.png" alt="wallet" />
            </div>
            <div className="wallet-content">
              <span>Available credits</span>
              <b>222.10</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
