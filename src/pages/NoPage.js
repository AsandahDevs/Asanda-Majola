import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

const NoPage = () => {
  return (
    <>
      <Container style={{ paddingTop: "15px" }}>
        <h1>
          <strong>404</strong>
        </h1>
        <p>Page not found !</p>
        <Link to="/">
          <Button variant="outline-primary">Back to main page</Button>
        </Link>
      </Container>
    </>
  );
};

export default NoPage;
