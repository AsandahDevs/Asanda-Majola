import { Link } from "react-router-dom";
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
          <p>Back to main page</p>
        </Link>
      </Container>
    </>
  );
};

export default NoPage;
