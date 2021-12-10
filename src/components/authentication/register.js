import React, { useState, useRef } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import "./register.css";

export default function Register() {
  //personal details input
  const [title, setTitle] = useState("");
  const [gender, setGender] = useState("");
  const firstNameRef = useRef();
  const middleNameRef = useRef();
  const lastNameRef = useRef();
  const [date, setDate] = useState("");

  //contact details inputs
  const addressRef = useRef();
  const cityRef = useRef();
  const [state, setState] = useState("");
  const zipNumberRef = useRef();
  const homeNumberRef = useRef();
  const mobileNumberRef = useRef();
  const additionalNumberRef = useRef();

  //account details input
  const [type, setType] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  //messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //Submit btn - to lock submit btn
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setSuccess("");
      setError("");
      setLoading(true);

      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      await addDoc(collection(db, "users"), {
        title: { title },
        gender: { gender },
        first_name: firstNameRef.current.value,
        middle_name: middleNameRef.current.value,
        last_name: lastNameRef.current.value,
        dob: { date },
        address: addressRef.current.value,
        city: cityRef.current.value,
        state: { state },
        zip_no: zipNumberRef.current.value,
        home_no: homeNumberRef.current.value,
        mobile_no: mobileNumberRef.current.value,
        additional_no: additionalNumberRef.current.value,
        account_type: { type },
      });

      setSuccess("Account created");
    } catch {
      setError("Failed to create an account / Account may be existing");
    }
    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        id="registerBody"
      >
        <div className="w-100" style={{ maxWidth: "900px" }}>
          <Card id="cardBody">
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}
              <Form onSubmit={handleSubmit}>
                {/* Personal Details */}
                <Form.Label id="headings">Personal Details</Form.Label>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Select
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    >
                      <option>Choose title*</option>
                      <option>Mr</option>
                      <option>Miss</option>
                      <option>Mrs</option>
                      <option>Ms</option>
                      <option>Mx</option>
                      <option>Dr</option>
                      <option>Prof</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option>Choose gender*</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name*"
                      ref={firstNameRef}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      placeholder="Enter middle name*"
                      ref={middleNameRef}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name*"
                      ref={lastNameRef}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="date"
                    placeholder="Enter date of birth*"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Form.Group>

                {/* Contact Details */}
                <Form.Label>Contact Details</Form.Label>

                <Form.Group className="mb-3">
                  <Form.Control placeholder="Enter Address*" ref={addressRef} />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      placeholder="Enter City*"
                      ref={cityRef}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option>Choose state*</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      placeholder="Enter zip number"
                      ref={zipNumberRef}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control
                      type="tel"
                      placeholder="Enter home number*"
                      ref={homeNumberRef}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Control
                      type="tel"
                      placeholder="Enter mobile number*"
                      ref={mobileNumberRef}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Control
                      type="tel"
                      placeholder="Enter additional number"
                      ref={additionalNumberRef}
                    />
                  </Form.Group>
                </Row>

                <Form.Label>Account Details</Form.Label>

                <Form.Group className="mb-3">
                  <Form.Select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option>Select type*</option>
                    <option>Tutor</option>
                    <option>Student</option>
                    <option>Parent</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter email*"
                    ref={emailRef}
                  />
                </Form.Group>

                <Row className="mb-3" id="forming">
                  <Form.Group as={Col}>
                    <Form.Control
                      type="password"
                      placeholder="Enter password*"
                      ref={passwordRef}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password*"
                      ref={passwordConfirmRef}
                    />
                  </Form.Group>
                </Row>

                <Button disabled={loading} className="w-100" type="submit">
                  Register
                </Button>
              </Form>
              <div className="w-100 text-center mt-2">
                Already have an account? Log In
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
