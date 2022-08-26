import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import { memo } from "react";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

const Home = (props) => {
  return (
    <>
      <figure className="hero-image">
        <figcaption className="hero-text animate__animated animate__zoomIn">
          <h1> Asanda Majola</h1>
          <h2>
            <em>Front End Web Developer</em>
          </h2>
          <span>
            <a
              href="https://github.com/AsandahDevs"
              target="_blank"
              rel="noreferrer"
              className="anchor-style"
            >
              <Github /> Github
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/asanda-majola-738067186/"
              target="_blank"
              rel="noreferrer"
              className="anchor-style"
            >
              <Linkedin /> Linkedin
            </a>
          </span>
          <br />
          <Link to="/Asanda-Majola/projects">
            <Button
              variant="dark"
              style={{
                fontFamily: "Roboto",
                fontSize: "10px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Explore Projects
            </Button>
          </Link>
        </figcaption>
      </figure>
      <Container style={{ paddingTop: "15px" }}>
        <section>
          <h2>About me</h2>
          <p>
            Asanda Majola is a front end web developer currently located in
            Durban,South Africa, whose mission is to provide client-side
            development to companies that obesses over <em>"pixel perfect"</em>{" "}
            designs that will enhance the user experience of its client-base
            through creating and deploying user interfaces that are responsive
            and accessible. As someone who has a new found interest in web
            development, i can safely say that my passions are derived from
            creating products that requires one to bridge the gap between
            artistry and technicality , in order to meet customer expectations.
          </p>
        </section>
        <section>
          <h2>Tools and technologies</h2>
          <br />
          <Row className="g-4">
            <Col md={3} className="justify-content-center">
              <img
                src={props.html}
                alt="HTML logo"
                style={{ width: "150px" }}
              />
              <figcaption style={{ paddingLeft: "50px" }}>HTML 5</figcaption>
            </Col>
            <Col md={3}>
              <img src={props.css} alt="CSS logo" style={{ width: "150px" }} />
              <figcaption style={{ paddingLeft: "50px" }}>CSS3</figcaption>
            </Col>
            <Col md={3}>
              <img
                src={props.bootstrap}
                alt="Bootstrap logo"
                style={{ width: "150px", height: "166px" }}
              />
              <figcaption style={{ paddingLeft: "40px" }}>
                Bootstrap 5
              </figcaption>
            </Col>
            <Col md={3}>
              <img
                src={props.JavaScript}
                alt="JavaScript logo"
                style={{ width: "150px", height: "166px" }}
              />
              <figcaption style={{ paddingLeft: "40px" }}>
                JavaScript
              </figcaption>
            </Col>
            <Col md={3}>
              <img
                src={props.react}
                alt="React logo"
                style={{ width: "150px" }}
              />
              <figcaption style={{ paddingLeft: "40px" }}>React.js</figcaption>
            </Col>
            <Col md={3}>
              <img
                src={props.nodejs}
                alt="node.js logo"
                style={{ width: "150px", height: "166px" }}
              />
              <figcaption style={{ paddingLeft: "40px" }}>node.js</figcaption>
            </Col>
            <Col md={3}>
              <img
                src={props.sql}
                alt="SQL logo"
                style={{ width: "150px", height: "166px" }}
              />
              <figcaption style={{ paddingLeft: "40px" }}>SQL</figcaption>
            </Col>
            <Col md={3}>
              <img
                src={props.git}
                alt="Git logo"
                style={{ width: "150px", height: "166px" }}
              />
              <figcaption style={{ paddingLeft: "40px" }}>Git</figcaption>
            </Col>
            <Col md={3}>
              <img
                src={props.vscode}
                alt="VS code logo"
                style={{ width: "150px" }}
              />
              <figcaption style={{ paddingLeft: "15px" }}>
                Visual studio code
              </figcaption>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default memo(Home);
