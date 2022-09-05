import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Github, EyeFill } from "react-bootstrap-icons";
import { memo } from "react";

const Cards = (props) => {
  return (
    <Card
      bg="dark"
      style={props.style}
      className="animate__animated animate__zoomIn"
    >
      <Card.Img
        variant="top"
        src={props.image}
        alt={props.alt}
        style={props.height}
      />
      <Card.Body>
        <Card.Title className="text-white text-center">
          {props.title}
        </Card.Title>
        <Card.Text className="text-white text-center">
          {props.description}
        </Card.Text>
        <Button
          variant="secondary"
          className="component-center"
          href={props.projectLink}
          target={"_blank"}
          style={{ width: "150px", borderRadius: "3rem" }}
        >
          Live Project <EyeFill />
        </Button>
        <br />
        <Button
          variant="secondary"
          className="component-center"
          href={props.codeLink}
          target={"_blank"}
          style={{ width: "190px", borderRadius: "3rem" }}
        >
          View source code <Github />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default memo(Cards);
