import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there, I am <span className="purple">Xanderr Lee </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />I am a junior pursuing MIT learning Computer Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching youtube
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing is impossible, even the word itself says im possible"{" "}
          </p>
          <footer className="blockquote-footer">Xanderr</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
