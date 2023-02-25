import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

import "./contact.css";

const Contact = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>
            <h1 className="display-3">Contact with module federation</h1>
          </CardTitle>

          <CardText>
            <Button color="primary">Click at me</Button>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Contact;