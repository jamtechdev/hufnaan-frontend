/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    Row,
    CardBody,
    Col,
    Card,
    CardTitle,
    Avatar
} from '../../../../components';
import avatars1 from '../../../../images/avatars/1.jpg'
function Tutors() {
    return (
        <React.Fragment>
            <div>
                <Container fluid>
                    <Row>
                        <Col md={12}>

                            <InputGroup className="mt-3">
                                <Input placeholder="Search for..." className="bg-white" />
                                <InputGroupAddon addonType="append">
                                    <Button color="success">
                                        <i className="fa fa-search"></i>
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>

                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col lg={4}>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col lg={3}>
                                            <Avatar.Image
                                                size="lg"
                                                src={avatars1}
                                            />
                                        </Col>
                                        <Col lg={9}>
                                            <CardTitle tag="h4">
                                                Header Above Small Text

                                            </CardTitle>
                                            <CardTitle tag="h5" className="text-success">
                                                B.Tech

                                            </CardTitle>
                                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            <Row className="mt-3">
                                                <Col sm={6} md={6}>
                                                    <Button color="success" tag={Link} to="/apps/new-email" className="mb-3 mb-lg-0">
                                                    Start a Session
                                                    </Button>
                                                </Col>
                                                <Col sm={6} md={6}>
                                                    <Button color="secondary" outline tag={Link} to="/apps/profile-edit">
                                                        View Profile
                                                    </Button>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col lg={3}>
                                            <Avatar.Image
                                                size="lg"
                                                src={avatars1}

                                            />
                                        </Col>
                                        <Col lg={9}>
                                            <CardTitle tag="h4">
                                                Header Above Small Text

                                            </CardTitle>
                                            <CardTitle tag="h5" className="text-success">
                                                B.Tech

                                            </CardTitle>

                                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            <Row className="mt-3">
                                                <Col sm={6} md={6}>
                                                    <Button color="success"  tag={Link} to="/apps/new-email" className="mb-3 mb-lg-0">
                                                        Start a Session
                                                    </Button>
                                                </Col>
                                                <Col sm={6} md={6}>
                                                    <Button color="secondary" outline  tag={Link} to="/apps/profile-edit">
                                                        View Profile
                                                    </Button>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col lg={3}>
                                            <Avatar.Image
                                                size="lg"
                                                src={avatars1}

                                            />
                                        </Col>
                                        <Col lg={9}>
                                            <CardTitle tag="h4">
                                                Header Above Small Text

                                            </CardTitle>
                                            <CardTitle tag="h5" className="text-success">
                                                B.Tech

                                            </CardTitle>

                                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            <Row className="mt-3">
                                                <Col sm={6} md={6}>
                                                    <Button color="success"  tag={Link} to="/" className="mb-3 mb-lg-0">
                                                        Start a Session
                                                    </Button>
                                                </Col>
                                                <Col sm={6} md={6}>
                                                    <Button color="secondary" outline  tag={Link} to="/">
                                                        View Profile
                                                    </Button>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </div>

        </React.Fragment>

    );


}
export default Tutors