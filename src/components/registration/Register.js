import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import AccountDetails from "./AccountDetails";
import "./register.css";
import ConfirmDetails from "./ConfirmDetails";

function Register() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    gender: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    zipNo: "",
    homeNo: "",
    mobileNo: "",
    additionalNo: "",
    accountType: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const FormTitles = [
    "WELCOME",
    "Contact Details",
    "Account Details",
    "Confirmation",
  ];

  const FormParagraph = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum molestias nam. Possimus, facilis vero! A corrupti unde pariatur vitae ipsam modi? Facere ullam pariatur veritatis iure perferendis cumque reiciendis!",
    "xLorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum molestias nam. Possimus, facilis vero! A corrupti unde pariatur vitae ipsam modi? Facere ullam pariatur veritatis iure perferendis cumque reiciendis!",
    "yLorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum molestias nam. Possimus, facilis vero! A corrupti unde pariatur vitae ipsam modi? Facere ullam pariatur veritatis iure perferendis cumque reiciendis!",
    "zLorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum molestias nam. Possimus, facilis vero! A corrupti unde pariatur vitae ipsam modi? Facere ullam pariatur veritatis iure perferendis cumque reiciendis!",
  ];

  const FormImages = [
    "https://images.wallpaperscraft.com/image/single/forest_fog_dark_127172_2560x1080.jpg",
    "https://wi.wallpapertip.com/wsimgs/159-1596990_dark-minimal-mountains-at-night-1080p-laptop-full.jpg",
    "https://ak.picdn.net/shutterstock/videos/1036366835/thumb/1.jpg?ip=x480",
    "https://wallpapercave.com/wp/z7tXPkz.jpg",
  ];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <PersonalDetails
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
          />
        );
      case 1:
        return (
          <ContactDetails
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
          />
        );
      case 2:
        return (
          <AccountDetails
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
          />
        );
      case 3:
        return <ConfirmDetails formData={formData} setPage={setPage} />;
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col id="banner">
            <div className="content">
              <h1>{FormTitles[page]}</h1>
              <p>{FormParagraph[page]}</p>
              <h5>Already has an account?</h5>
              <Button>Login</Button>
            </div>
            <img src={FormImages[page]} alt="banner" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Container className="d-flex align-items-center" id="registerBody">
              <div className="w-100">
                <Card id="cardBody">
                  <Card.Body>{PageDisplay()}</Card.Body>
                </Card>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
