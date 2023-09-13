import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import CartIconElement from "../../../images/CartIconElement.png";
import ProfileIconElement from "../../../images/ProfileIconElement.png";
import SearchIconElement from "../../../images/SearchIconElement.png";
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";

function Header() {
  const options = {
    burgerColor:"#eb4034",
    burgerColorHover: "rgb(179, 66, 46)",
    logo,
    logoWidth: "20vmax",
    navColor1: "white",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    profileIconUrl: "/login",
    searchIconUrl: "/search",
    cartIconUrl: "/cart",
    profileIcon: true,
    searchIcon: true,
    cartIcon: true,
    profileIconColor: "rgba(35, 35, 35,0.8)",
    searchIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    ProfileIconElement: MdAccountCircle,
    CartIconElement: MdAddShoppingCart,
    SearchIconElement: MdSearch,
    searchIconSize: "2vmax",
    cartIconSize: "2vmax",
    profileIconSize: "2.5vmax",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
  };

  return <ReactNavbar {...options} />;
}

export default Header;
