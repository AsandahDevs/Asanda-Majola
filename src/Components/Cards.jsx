import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = (props) => {
  return (
    <Card bg="dark">
      <Card.Img
        variant="top"
        src={props.image}
        style={props.style}
        alt={props.alt}
      />
      <Card.Body>
        <Card.Title className="text-white text-center">
          {props.title}
        </Card.Title>
        <Card.Text className="text-white text-center">
          {props.description}
        </Card.Text>
        <Button
          variant="outline-primary"
          className="component-center"
          href={props.projectLink}
          target={"_blank"}
          style={{ width: "150px" }}
        >
          Live Project
        </Button>
        <br />
        <Button
          variant="outline-primary"
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

export default Cards;
