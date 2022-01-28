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

  const FormImages = [""];

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
      {/* <Container>
        <Row className="register">
          <Col className="registerBanner" xs={6}>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-3391266-2937870.png"
              alt="bannerImages"
            />
            <div className="content">
              <h1>{FormTitles[page]}</h1>
              <p>{FormParagraph[page]}</p>
              <h5>Already has an account?</h5>
              <Button>Login</Button>
            </div>
          </Col>

          <Col className="registerForms">
            <div>{PageDisplay()}</div>
          </Col>
        </Row>
      </Container> */}

      <Container fluid>
        <Row className="register">
          <Col className="registerBanner" xs={6}>
            <h1>{FormTitles[page]}</h1>
            <p>{FormParagraph[page]}</p>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-3391266-2937870.png"
              alt="bannerImages"
            />
            <h5>Already has an account?</h5>
            <Button>Login</Button>
          </Col>

          <Col className="registerForms">{PageDisplay()}</Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
