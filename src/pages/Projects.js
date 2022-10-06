import Container from "react-bootstrap/esm/Container";
import Cards from "../Components/Cards";
import Carousel from "react-bootstrap/Carousel";

const Projects = () => {
  return (
    <Container style={{ paddingTop: "15px" }} fluid>
      <h1>
        <strong>Projects</strong>
      </h1>
      <Carousel>
        <Carousel.Item interval={10000}>
          <Cards
            style={{
              width: "300px",
              height: "auto",
              margin: "auto",
              marginBottom: "3em",
            }}
            image={
              "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/seafoodwebsite.webp"
            }
            alt={"a preview image"}
            title={"A seafood restaurant website"}
            description={
              "This website was created for the sole purpose of advertising the most popular seafoods dishes served by Mchunu seafoods, the company, for the poeple of the eThekwini region"
            }
            projectLink={"https://asandahdevs.github.io/"}
            codeLink={"https://github.com/AsandahDevs/asandahdevs.github.io"}
          />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <Cards
            style={{
              width: "300px",
              height: "auto",
              margin: "auto",
              marginBottom: "3em",
            }}
            height={{ height: "250px" }}
            image={
              "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/carbuyingsite.webp"
            }
            alt={"a preview image "}
            title={"A car buying site"}
            description={
              "A website for car enthusiasts whether you're on a tight budget or simply want to spend big on that latest whip"
            }
            projectLink={
              "https://asandahdevs.github.io/carBuyingSite.github.io/"
            }
            codeLink={"https://github.com/AsandahDevs/carBuyingSite.github.io"}
          />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <Cards
            style={{
              width: "300px",
              height: "auto",
              margin: "auto",
              marginBottom: "3em",
            }}
            height={{ height: "250px" }}
            image={
              "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/newsfetcherAPI.webp"
            }
            alt={"a preview image"}
            title={"Newsfetcher API Web App"}
            description={
              "A web application for keeping up-to-date with the latest and most popular news from the USA and around the world through utilizing New York Times API."
            }
            projectLink={"https://asandahdevs.github.io/newsFetcher.github.io/"}
            codeLink={"https://github.com/AsandahDevs/newsFetcher.github.io"}
          />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <Cards
            style={{
              width: "300px",
              height: "auto",
              margin: "auto",
              marginBottom: "3em",
            }}
            height={{ height: "250px" }}
            image={
              "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/starbucksClone.webp"
            }
            alt={"a preview image"}
            title={"A starbucks clone website"}
            description={
              "A starbucks clone website that utilizes react.js and react-router for creating a single page appplication"
            }
            projectLink={"https://asandahdevs.github.io/starbucks-clone/"}
            codeLink={
              "https://github.com/AsandahDevs/starbucks-clone/tree/main"
            }
          />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <Cards
            style={{
              width: "300px",
              height: "auto",
              margin: "auto",
              marginBottom: "3em",
            }}
            height={{ height: "250px" }}
            image={
              "https://AsandahDevs.github.io/Asanda-Majola/Assets/Images/Amabele_preview.webp"
            }
            alt={"a preview image"}
            title={"Amabele: An e-commerce website"}
            description={
              "An S.P.A ecommerce website for facilitating the promotion and sale of alcoholic beverages built using react.js"
            }
            projectLink={"https://asandahdevs.github.io/Amabele/"}
            codeLink={"https://github.com/AsandahDevs/Amabele/tree/main"}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Projects;
