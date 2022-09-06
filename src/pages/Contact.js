import Container from "react-bootstrap/esm/Container";
import { Envelope } from "react-bootstrap-icons";
import { Whatsapp } from "react-bootstrap-icons";
import { Telephone } from "react-bootstrap-icons";
const Contact = () => {
  return (
    <Container style={{ paddingTop: "15px" }} fluid>
      <h1>Are you interested in working with me ?</h1>
      <p>
        Well, since this website has no backend services connected to it,
        unfortunately i'm unable to capture any user details.However, there is
        an alternative solution where you can reach out to me using any of the
        below channels.<strong>Apologies for any inconveniences.</strong>
      </p>
      <h2>Channels you can connect with me</h2>
      Direct email: <Envelope /> noelmajola@gmail.com | Whatsapp: <Whatsapp />{" "}
      061 987 7031 | Contact number: <Telephone /> 061 987 7031
    </Container>
  );
};

export default Contact;
