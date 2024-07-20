
import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";



//the yellow () after .map and around the (campsite) + row + col + CampsiteCard helps to group these pieces together and be returned as a single expression in the CampsitesList component
const CampsitesList= () => {
  return (
    <Row className="ms-auto">
      {CAMPSITES.map((campsite) => {
        return (
          <Col md="5" className="m-4" key={campsite.id}>
            <CampsiteCard campsite={campsite}/>
          </Col>  
        );
      })}
    </Row>
  );
};

export default CampsitesList;