import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { memo } from "react";

const Blogcards = (props) => {
  return (
    <Card
      bg="dark"
      style={props.style}
      className="animate__animated animate__zoomIn"
    >
      <Card.Img variant="top" src={props.blogimage} alt={props.alt} />
      <Card.Body>
        <Card.Title className="text-white text-center">
          {props.blogtitle}
        </Card.Title>
        <Card.Text className="text-white text-center">
          {props.blogdescription}
        </Card.Text>
        <Button
          variant="secondary"
          className="component-center"
          href={props.blogURL}
          target={"_blank"}
          style={{ width: "150px", borderRadius: "3rem" }}
        >
          View blog
        </Button>
      </Card.Body>
    </Card>
  );
};
export default memo(Blogcards);
