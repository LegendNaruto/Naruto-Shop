import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Naruto Shop.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Jassem Baccari</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
      <a
              href="https://www.facebook.com/user.not.404/"
              target="blank"
            >
              <FacebookIcon className="facebookSvgIcon" />
            </a>

        <a href="https://www.instagram.com/legend.naruutooo/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
                </a>

          <a href="https://www.linkedin.com/in/jassem-baccari-002734224/" target="blank">
              <LinkedInIcon className="linkdinSvgIcon" />
            </a>
        
      </div>
    </footer>
  );
};

export default Footer;
