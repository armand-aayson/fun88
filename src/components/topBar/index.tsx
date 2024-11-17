import React from "react";
import "./index.css";
import threeBar from "../../assets/icons/3BAR.svg";
import fun88 from "../../assets/logos/F1M5_Logo.webp";
import wallet from "../../assets/icons/wallet.svg";
import userHead from "../../assets/icons/userhead.svg";
import divider from "../../assets/icons/Line 1.png";

const TopBar = () => {
  return (
    <div className="topBarCont">
      <div className="leftCont">
        <img
          className="threeBarSvg"
          src={threeBar}
          style={{ height: 18 }}
          alt="three bars"
        />

        <img
          className="siteNameSvg"
          src={fun88}
          style={{ height: 18 }}
          alt="site name"
        />
      </div>
      <div className="rightCont">
        <div className="walletMoneyCont">
          <img className="walletSvg" src={wallet} alt="wallet" />
          <div className="moneyCont">$1990.6</div>
        </div>
        <img className="dividerImg" src={divider} alt="divider" />
        <img className="userHeadSvg" src={userHead} alt="user head" />
      </div>
    </div>
  );
};
export default TopBar;
