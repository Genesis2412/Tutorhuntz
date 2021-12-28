import React, { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

function AccountDetails({ formData, setFormData, setPage }) {
  var initial = "";
  const [errors, setErrors] = useState("");

  const Validate = () => {
    if (formData.accountType.length === 0) {
      initial += "Select valid account type<br>";
    }
    if (formData.email.length === 0) {
      initial += "Enter valid email<br>";
    }
    if (formData.password.length < 8 || formData.password.length > 20) {
      initial += "Enter valid password<br>";
    }

    if (formData.confirmPassword !== formData.password) {
      initial += "Passwords do not match<br>";
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
        <Form.Label>Account type</Form.Label>
        <Form.Select
          value={formData.accountType}
          onChange={(e) =>
            setFormData({ ...formData, accountType: e.target.value })
          }
        >
          <option>Text</option>
          <option>Tutor</option>
          <option>Student</option>
          <option>Parent</option>
        </Form.Select>
        <Form.Text id="helpText" muted>
          Required*
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Form.Text id="helpText" muted>
          Required*
        </Form.Text>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Form.Text id="helpText" muted>
            Your password should be of 8 or greater characters*
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <Form.Text id="helpText" muted>
            Required*
          </Form.Text>
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

export default AccountDetails;
