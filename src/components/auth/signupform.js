/**
 * Created by adrian on 27/08/2018.
 */
import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Row, Col } from 'react-bootstrap';

class SignupForm extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={6}>
                        <Form horizontal>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Full Name
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" id="fullname" name="fullname" placeholder="Full Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Username
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" id="username" name="username" placeholder="Username" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" id="email" name="email" placeholder="Email" required />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" id="password" name="password" placeholder="Password" required />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Repeat Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" id="password_check" name="password_check" placeholder="Password" required />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button bsStyle="primary" type="submit">Sign up</Button>
                                    {' '}
                                    <Button>Cancel</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default SignupForm;