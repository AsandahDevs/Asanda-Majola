import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { memo } from "react";

const Blogcards = (props) => {
  return (
    <Card bg="dark" style={props.style}>
      <Card.Img variant="top" src={props.blogimage} alt={props.alt} />
      <Card.Body>
        <Card.Title className="text-white text-center">
          {props.blogtitle}
        </Card.Title>
        <Card.Text className="text-white text-center">
          {props.blogdescription}
        </Card.Text>
        <Button
          variant="primary"
          className="component-center"
          href={props.blogURL}
          target={"_blank"}
          style={{ width: "150px" }}
        >
          View blog
        </Button>
      </Card.Body>
    </Card>
  );
};
export default memo(Blogcards);
