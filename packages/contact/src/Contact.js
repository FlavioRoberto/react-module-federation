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
            Hello contact
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Contact;
