import Blogcards from "./src/Components/Blogcards";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Blogs = () => {
  return (
    <Container>
      <h1>My personal blogs</h1>
      <section>
        <br />
        <Row className="g-4 justify-content-center">
          <Col md={4}>
            <Blogcards
              blogimage={"Assets/images/A computer component.webp"}
              alt={"A computer hardware component"}
              style={{ width: "250px" }}
              blogtitle={"High level vs low-level programming languages"}
              blogdescription={
                "Discover the main difference between a high-level programming language and a low-level programming language."
              }
              blogURL={
                "https://noelmajola.wixsite.com/the-clients-view/post/high-level-vs-low-level-programming-languages"
              }
            />
          </Col>
          <Col md={4}>
            <Blogcards
              blogimage={"Assets/images/A monitor with some code display.webp"}
              alt={"A monitor with some code display"}
              style={{ width: "250px" }}
              blogtitle={"Programming and its use in web development"}
              blogdescription={
                "A blog that explores how programming languages can be used for the sole purpose of creating fully functional websites."
              }
              blogURL={
                "https://noelmajola.wixsite.com/the-clients-view/post/programming-and-its-use-in-web-development"
              }
            />
          </Col>
        </Row>
      </section>
    </Container>
  );
};
export default Blogs;
