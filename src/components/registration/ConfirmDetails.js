import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./register.css";

function ConfirmDetails({ formData, setPage }) {
  return (
    <Container>
      <Row>
        <Col id="confirmFBox">
          <h5>Personal Details</h5>
          <ul>
            <li>
              Title: <span>{formData.title}</span>
            </li>
            <li>
              First Name: <span>{formData.firstName}</span>
            </li>

            {formData.middleName && (
              <li>
                Middle Name: <span>{formData.middleName}</span>
              </li>
            )}
            <li>
              Last Name: <span>{formData.lastName}</span>
            </li>
            <li>
              Date of Birth: <span>{formData.dob}</span>
            </li>
          </ul>
        </Col>
        <Col id="confirmBox">
          <h5>Contact Details</h5>
          <ul>
            <li>
              Address: <span>{formData.address}</span>
            </li>
            <li>
              City: <span>{formData.city}</span>
            </li>
            <li>
              State: <span>{formData.state}</span>
            </li>
            <li>
              Zip Number: <span>{formData.zipNo}</span>
            </li>
            <li>
              Home Number: <span>{formData.homeNo}</span>
            </li>
            <li>
              Mobile Number: <span>{formData.mobileNo}</span>
            </li>
            {formData.additionalNo && (
              <li>
                Additional Number: <span>{formData.additionalNo}</span>
              </li>
            )}
          </ul>
        </Col>
        <Col id="confirmLBox">
          <h5>Account Details</h5>
          <ul>
            <li>
              Account Type: <span>{formData.accountType}</span>
            </li>
            <li>
              Email: <span>{formData.email}</span>
            </li>
          </ul>
        </Col>
      </Row>
      <Button
        className="back"
        onClick={() => {
          setPage((currentPage) => currentPage - 1);
        }}
      >
        Back
      </Button>
      <Button className="continue">Submit</Button>
    </Container>
  );
}

export default ConfirmDetails;
