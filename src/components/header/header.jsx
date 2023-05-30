import React from "react";
import Img from "../../image/headerImg.png"
import Name from "../../image/Black_Minimalist_Simple_Personal_Name_Logo-removebg-preview.png"
import Style from "./header.module.css"

const Header = () => {
 return (
  <div>
    <img className={Style.pic} src={Img} alt="" /> 
    <img className={Style.name} src={Name} alt="" />

  </div>
 )
}
export default Header