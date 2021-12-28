import React, { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

function PersonalDetails({ formData, setFormData, setPage }) {
  var initial = "";
  const [errors, setErrors] = useState("");

  const Validate = () => {
    if (formData.title.length === 0) {
      initial += "Select valid title<br>";
    }
    if (formData.gender.length === 0) {
      initial += "Select valid gender<br>";
    }
    if (formData.firstName.length < 2 || formData.firstName.length > 26) {
      initial += "First name should be between 2 and 26 characters<br>";
    }

    if (formData.lastName.length < 2 || formData.lastName.length > 26) {
      initial += "Last name should be between 2 and 26 characters<br>";
    }
    if (formData.dob.length === 0) {
      initial += "Enter valid date of birth<br>";
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
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Title</Form.Label>
          <Form.Select
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          >
            <option>Text</option>
            <option>Mr</option>
            <option>Miss</option>
            <option>Mrs</option>
            <option>Ms</option>
            <option>Mx</option>
            <option>Dr</option>
            <option>Prof</option>
          </Form.Select>
          <Form.Text id="helpText" muted>
            Required*
          </Form.Text>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Gender</Form.Label>
          <Form.Select
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <option>Text</option>
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
          <Form.Text id="helpText" muted>
            Required*
          </Form.Text>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <Form.Text id="helpText" muted>
            Characters should between 2 and 26*
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.middleName}
            onChange={(e) =>
              setFormData({ ...formData, middleName: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          <Form.Text id="helpText" muted>
            Characters should between 2 and 26*
          </Form.Text>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
        />
        <Form.Text id="helpText" muted>
          Required*
        </Form.Text>
      </Form.Group>
      <Button className="continue" onClick={Validate}>
        Continue
      </Button>
    </Form>
  );
}

export default PersonalDetails;
