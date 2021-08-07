import React from 'react';
// import { Link } from 'react-router-dom';
import { 
    Container,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    Row,
    CardBody,
    Col,
    Card
} from '../../../../components';

import avatars1 from '../../../../images/avatars/33.jpg'
function Courses() {
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
                       
                        <Col lg={3}>
                        <Card className="mb-3">
                            <div className="courses-img">
                                <img src={avatars1}/>
                            </div>
                            <CardBody className="courses-content">
                           
                                    <h3 className="title">Become a Certified HTML, CSS, JavaScript Web Developer</h3>
                                    <div className="details-cap">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                    <div className="courses-rating">
                                    <span className="c-rating-text">4.6</span><span className="c-rating-icon"><i className="fa fa-fw fa-star" aria-hidden="true"></i></span><span className="c-rating-user-no">(2,223)</span>
                                    </div>
                                    <div className="courses-price">
                                        <span className="courses-current-price">₹525</span>
                                        <s>
                                        <span className="courses-original-price">₹525</span>
                                        </s>
                                        
                                    </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg={3}>
                        <Card className="mb-3">
                            <div className="courses-img">
                                <img src={avatars1}/>
                            </div>
                            <CardBody className="courses-content">
                           
                                    <h3 className="title">Become a Certified HTML, CSS, JavaScript Web Developer</h3>
                                    <div className="details-cap">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                    <div className="courses-rating">
                                    <span className="c-rating-text">4.6</span><span className="c-rating-icon"><i className="fa fa-fw fa-star" aria-hidden="true"></i></span><span className="c-rating-user-no">(2,223)</span>
                                    </div>
                                    <div className="courses-price">
                                        <span className="courses-current-price">₹525</span>
                                        <s>
                                        <span className="courses-original-price">₹525</span>
                                        </s>
                                        
                                    </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg={3}>
                        <Card className="mb-3">
                            <div className="courses-img">
                                <img src={avatars1}/>
                            </div>
                            <CardBody className="courses-content">
                           
                                    <h3 className="title">Become a Certified HTML, CSS, JavaScript Web Developer</h3>
                                    <div className="details-cap">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                    <div className="courses-rating">
                                    <span className="c-rating-text">4.6</span><span className="c-rating-icon"><i className="fa fa-fw fa-star" aria-hidden="true"></i></span><span className="c-rating-user-no">(2,223)</span>
                                    </div>
                                    <div className="courses-price">
                                        <span className="courses-current-price">₹525</span>
                                        <s>
                                        <span className="courses-original-price">₹525</span>
                                        </s>
                                        
                                    </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg={3}>
                        <Card className="mb-3">
                            <div className="courses-img">
                                <img src={avatars1}/>
                            </div>
                            <CardBody className="courses-content">
                           
                                    <h3 className="title">Become a Certified HTML, CSS, JavaScript Web Developer</h3>
                                    <div className="details-cap">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                    <div className="courses-rating">
                                    <span className="c-rating-text">4.6</span><span className="c-rating-icon"><i className="fa fa-fw fa-star" aria-hidden="true"></i></span><span className="c-rating-user-no">(2,223)</span>
                                    </div>
                                    <div className="courses-price">
                                        <span className="courses-current-price">₹525</span>
                                        <s>
                                        <span className="courses-original-price">₹525</span>
                                        </s>
                                        
                                    </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg={3}>
                        <Card className="mb-3">
                            <div className="courses-img">
                                <img src={avatars1}/>
                            </div>
                            <CardBody className="courses-content">
                           
                                    <h3 className="title">Become a Certified HTML, CSS, JavaScript Web Developer</h3>
                                    <div className="details-cap">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                    <div className="courses-rating">
                                    <span className="c-rating-text">4.6</span><span className="c-rating-icon"><i className="fa fa-fw fa-star" aria-hidden="true"></i></span><span className="c-rating-user-no">(2,223)</span>
                                    </div>
                                    <div className="courses-price">
                                        <span className="courses-current-price">₹525</span>
                                        <s>
                                        <span className="courses-original-price">₹525</span>
                                        </s>
                                        
                                    </div>
                            </CardBody>
                        </Card>
                        </Col>
                        </Row>
                
            </Container>
            </div>
           
   </React.Fragment>
 
);


}
export default Courses