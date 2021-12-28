import React, { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

function ContactDetails({ formData, setFormData, setPage }) {
  var initial = "";
  const [errors, setErrors] = useState("");

  const Validate = () => {
    if (formData.address.length < 10 || formData.address.length > 100) {
      initial += "Enter valid address<br>";
    }
    if (formData.city.length < 5 || formData.city.length > 25) {
      initial += "Enter valid city<br>";
    }
    if (formData.state.length === 0) {
      initial += "Select valid state<br>";
    }
    if (formData.zipNo.length === 0) {
      initial += "Enter valid zip number<br>";
    }
    if (formData.homeNo.length === 0) {
      initial += "Enter valid home number";
    }
    if (formData.mobileNo.length === 0) {
      initial += "Enter valid mobile number";
    }
    if (formData.additionalNo.length > 8) {
      initial += "Enter valid additional number";
    }

    setErrors(initial);

    if (initial.length === 0) {
      setPage((currentPage) => currentPage + 1);
    }
  };
  return (
    <Form>
      {errors && (
        <Alert variant="danger">
          <p dangerouslySetInnerHTML={{ __html: errors }}></p>
        </Alert>
      )}
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        <Form.Text id="helpText" muted>
          Address should be between 10 and 100 characters*
        </Form.Text>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <Form.Text id="helpText" muted>
            City should be between 5 and 25 characters*
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>State</Form.Label>
          <Form.Select
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          >
            <option>Text</option>
            <option>Moka</option>
          </Form.Select>
          <Form.Text id="helpText" muted>
            Required*
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Zip Number</Form.Label>
          <Form.Control
            type="text"
            value={formData.zipNo}
            onChange={(e) =>
              setFormData({ ...formData, zipNo: e.target.value })
            }
          />
          <Form.Text id="helpText" muted>
            Zip number should be 10 characters*
          </Form.Text>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Home Number</Form.Label>
          <Form.Control
            type="tel"
            value={formData.homeNo}
            onChange={(e) =>
              setFormData({ ...formData, homeNo: e.target.value })
            }
          />
          <Form.Text id="helpText" muted>
            Required*
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            value={formData.mobileNo}
            onChange={(e) =>
              setFormData({ ...formData, mobileNo: e.target.value })
            }
          />
          <Form.Text id="helpText" muted>
            Required*
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Additional Number</Form.Label>
          <Form.Control
            type="tel"
            value={formData.additionalNo}
            onChange={(e) =>
              setFormData({ ...formData, additionalNo: e.target.value })
            }
          />
        </Form.Group>
      </Row>

      <Button
        className="back"
        onClick={() => {
          setPage((currentPage) => currentPage - 1);
        }}
      >
        Back
      </Button>
      <Button className="continue" onClick={Validate}>
        Continue
      </Button>
    </Form>
  );
}

export default ContactDetails;
