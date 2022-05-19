import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram"; 
const About = () => {
  const visitFacebook = () => {
    window.location = "https://www.facebook.com/user.not.404/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/narutoshop/image/upload/v1652746728/t%C3%A9l%C3%A9charg%C3%A9_q0s4qj.jpg"
              alt="Founder"
            />
            <Typography>Jassem Baccari</Typography>
            <Button onClick={visitFacebook} color="primary">
              Visit Facebook
            </Button>
            <span>
              This is a sample wesbite made with love by @Jassem Baccari !
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.facebook.com/user.not.404/"
              target="blank"
            >
              <FacebookIcon className="facebookSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/jassem-baccari-002734224/" target="blank">
              <LinkedInIcon className="linkdinSvgIcon" />
            </a>

            <a href="https://github.com/LegendNaruto" target="blank">
              <GitHubIcon className="githubSvgIcon" />
                </a>

                  <a href="https://www.instagram.com/legend.naruutooo/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
                </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
