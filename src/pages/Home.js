import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import { memo ,useEffect} from "react";
import { Linkedin,Github } from "react-bootstrap-icons";

const Home = (props) => {
  useEffect(() => {
    const targetElements = document.querySelectorAll(".icon");

    const options = {
      root: null,
      rootMarging: "0px",
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__slideInLeft"
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    targetElements.forEach((targetElement) => {
      observer.observe(targetElement);
    });
  }, []);

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
          <br />
          <a
            href="https://AsandahDevs.github.io/Asanda-Majola/Assets/Asanda_Majola_Front_end_developer_resume.pdf"
            download
          >
            <Button
              variant="dark"
              style={{
                fontFamily: "Roboto",
                fontSize: "10px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Download CV
            </Button>
          </a>
        </figcaption>
      </figure>
      <Container style={{ paddingTop: "15px" }} fluid>
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
          <Row className="justify-content-space-around g-4">
            <Col xs={3} md={4}>
              <img
                src={props.html}
                alt="HTML logo"
                style={{ width: "150px", height: "30px" }}
                className="icon"
              />
              <figcaption style={{ paddingLeft: "55px" }}>HTML</figcaption>
            </Col>
            <Col xs={3} md={4}>
              <img
                src={props.css}
                alt="CSS logo"
                style={{ width: "150px", height: "30px" }}
                className="icon"
              />
              <figcaption style={{ paddingLeft: "55px" }}>CSS</figcaption>
            </Col>
            <Col xs={3} md={4}>
              <img
                src={props.bootstrap}
                alt="Bootstrap logo"
                style={{ width: "160px", height: "30px" }}
                className="icon"
              />
              <figcaption style={{ paddingLeft: "40px" }}>Bootstrap</figcaption>
            </Col>
          </Row>
          <Row className="justify-content-center g-4 py-3">
            <Col xs={5} md={4}>
              <img
                src={props.JavaScript}
                alt="JavaScript logo"
                style={{ width: "150px", height: "30px" }}
                className="icon"
              />
              <figcaption style={{ paddingLeft: "40px" }}>
                JavaScript
              </figcaption>
            </Col>
            <Col xs={5} md={4}>
              <img
                src={props.react}
                alt="React logo"
                style={{ width: "150px", height: "30px" }}
                className="icon"
              />
              <figcaption style={{ paddingLeft: "40px" }}>React.js</figcaption>
            </Col>
          </Row>
          <Row className="justify-content-center g-4 py-3">
            <Col xs={5} md={4}>
              <img
                src={props.angular}
                alt="Angular logo"
                style={{ width: "24px", height: "24px" , marginLeft:"55px"}}
                className="icon"
              />
              <figcaption style={{ paddingLeft: "40px" }}>Angular</figcaption>
            </Col>
            <Col xs={5} md={4}>
              <img
                src={props.git}
                alt="Git logo"
                style={{ width: "150px", height: "30px" }}
                className="icon"
              />
              <figcaption style={{ paddingLeft: "40px" }}>Git</figcaption>
            </Col>
          </Row>
          <figure className="text-center">
            <img
              src={props.nodejs}
              alt="node.js logo"
              style={{
                width: "150px",
                height: "30px",
              }}
              className="icon"
            />
            <figcaption>node.js</figcaption>
          </figure>
        </section>
      </Container>
    </>
  );
};

export default memo(Home);
