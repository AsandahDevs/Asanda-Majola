import Container from "react-bootstrap/esm/Container";
import Cards from "../Components/Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = () => {
  return (
    <Container style={{ paddingTop: "15px" }}>
      <h1>
        <strong>Projects</strong>
      </h1>
      <Row className="g-4">
        <Col md={4}>
          <Cards
            image={
              "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/seafoodwebsite.png"
            }
            alt={"a preview image"}
            title={"A seafood restaurant website"}
            description={
              "This website was created for the sole purpose of advertising the most popular seafoods dishes served by Mchunu seafoods, the company, for the poeple of the eThekwini region"
            }
            projectLink={"https://asandahdevs.github.io/"}
            codeLink={"https://github.com/AsandahDevs/asandahdevs.github.io"}
          />
        </Col>
        <Col md={4}>
          <Cards
            image={
              "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/carbuyingsite.png"
            }
            alt={"a preview image "}
            style={{ height: "345px" }}
            title={"A car buying site"}
            description={
              "A website for car enthusiasts whether you're on a tight budget or simply want to spend big on that latest whip"
            }
            projectLink={
              "https://asandahdevs.github.io/carBuyingSite.github.io/"
            }
            codeLink={"https://github.com/AsandahDevs/carBuyingSite.github.io"}
          />
        </Col>
        <Col md={4}>
          <Cards
            image={
              "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/newsfetcherAPI.png"
            }
            alt={"a preview image"}
            style={{ height: "335px" }}
            title={"Newsfetcher API Web App"}
            description={
              "A web application for keeping up-to-date with the latest and most popular news from the USA and around the world through utilizing New York Times API."
            }
            projectLink={"https://asandahdevs.github.io/newsFetcher.github.io/"}
            codeLink={"https://github.com/AsandahDevs/newsFetcher.github.io"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
