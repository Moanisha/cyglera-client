import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", textAlign: "center" }}>
        Need to talk to us directly? Contact us
      </h1>
      <Container>
        <Row>
          <div style={{ margin: "0 auto" }}>
            <a
              style={{ color: "#eb3223", marginRight: "20px" }}
              href="https://www.youtube.com/channel/UCw9AlxaQUSnY_N1PfqJ9l_A"
              className="youtube social"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a
              style={{ color: "#4968ad", marginRight: "20px" }}
              href="https://www.facebook.com/getsaluswell/"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              style={{ color: "#49a1eb", marginRight: "20px" }}
              href="https://twitter.com/SalusWell"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </Row>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
        </Row>
        <Row>
          <h5 style={{ margin: "10px auto" }}>
            Copyright © 2023 Saluswell. All rights reserved.
          </h5>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
