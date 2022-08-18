import Container from "react-bootstrap/esm/Container";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <Container style={{ paddingTop: "15px" }}>
      <footer>
        &copy; Asanda Majola 2022{" "}
        <span style={{ marginLeft: "10px" }}>
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
      </footer>
    </Container>
  );
};
export default Footer;
