
import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";



//the set of () after .map are because .map is a function.  The () are around the parameter to the function. The parameter to the function is the (campsite) => {  return ....};  // it's doing this:  { CAMPSITES.map (callbackFunction) } where callbackFunction takes in a campsite and returns some JSX of a Col and CampsiteCard. 
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