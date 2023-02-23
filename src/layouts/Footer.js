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
            <FooterLink href="#">Privacy and Security</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Terms of Use</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">About us</FooterLink>
          </Column>
        </Row>
        <Row>
          <p style={{ margin: "10px auto", fontSize: "10px" }}>
            Copyright © 2023 Saluswell. All rights reserved. Powered by Cyglera
            Health Systems.
          </p>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
