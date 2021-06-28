import React from "react";
import "./Footer.css";
// import { Button } from "./Button";

function Footer() {
  return (
    <div>
      <div className="footer-container" style={{ borderTop: "12px double #0059fe", backgroundColor: "white" }}>
        <h1 style={{ color: "#0059fe", fontFamily: "Comic Sans MS" }}><b>TWEETBOOK</b></h1>
        <section className="footer-subscription">
          <p className="footer-subscription-heading" style={{ color: "#0059fe" }}>
            <b>Connected creativity, Feel The Social Experience.
              It’s time to go social. We’ll make it simple
            </b>
          </p>
        </section>
        <section>
          <div>
            <small class="website-rights" style={{ color: "#0059fe" }}><b>TWEETBOOK &copy; 2021 All Rights Reserved</b></small>
          </div>
        </section>
        </div>
      </div>
      );
}

      export default Footer;
