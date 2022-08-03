import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Home = (props) => {
  return (
    <>
      <div class="hero-image">
        <div class="hero-text">
          <h1 style={{ fontSize: "50px" }}>I am Asanda Majola</h1>
          <h3>
            And I'm a <em>Front End Web Developer</em>
          </h3>
          <Button variant="info" href="/contact">
            Hire me
          </Button>
        </div>
      </div>
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

export default Home;
