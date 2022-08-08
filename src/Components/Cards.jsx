import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
          variant="primary"
          className="component-center"
          href={props.projectLink}
          target={"_blank"}
          style={{ width: "150px" }}
        >
          Live Project
        </Button>
        <br />
        <Button
          variant="primary"
          className="component-center"
          href={props.codeLink}
          target={"_blank"}
          style={{ width: "190px" }}
        >
          View source code
        </Button>
      </Card.Body>
    </Card>
  );
};

export default memo(Cards);
