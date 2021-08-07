import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Container,
    Button,
    Row,
    CardBody,
    Col,
    CardHeader,
    Card,
    CardTitle,
    Avatar
} from '../../../../components';
import avatars1 from '../../../../images/avatars/1.jpg'
function PersonalDetails() {
    return (
        <React.Fragment>
            <div>
                 <Container fluid>
                     
                    <Row className="mt-3">
                        <Col lg={12}>
                        <Card>
                            <CardHeader tag="h3" className="bg-gray text-black d-flex">
                            Personal Details
                           
                               
                                <i className="fa fa-gear ml-auto"></i>
                           
                            </CardHeader>
                            <CardBody>
                                <Row>
                                <Col lg={ 4 }>
                    <Card>
                        <CardBody>
                        <div className="d-flex justify-content-center my-3">
                        <Avatar.Image
                                size="lg"
                                src={ avatars1 }
                               
                            />
                                                </div>
                                                <div className="mb-4 text-center">
                                                    <a className="h6 text-decoration-none" href="#">Branson Howell</a>
                                                    <div className="text-center mt-2">Central Accounts Architect</div>
                                                    <div className="text-center"><i className="fa fa-map-marker mr-1"></i>Kleintown</div>
                                                    </div>
                            <div className="text-center pb-1">
                                <ul className="list-inline">
                                    <li className="list-inline-item text-center">
                                        <h2 className="mb-1">23</h2>
                                        <span>Contracts</span>
                                    </li>
                                    <li className="list-inline-item text-center">
                                        <h2 className="mb-1">13</h2>
                                        <span>Tasks</span>
                                    </li>
                                    <li className="list-inline-item text-center">
                                        <h2 className="mb-1">5</h2>
                                        <span>Relases</span>
                                    </li>
                                </ul>
                            </div>                                
                            <Row className="mt-3">
                               
                                <Col sm={ 12 } md={ 12 }>
                                    <Button color="success" block tag={ Link } to="/">
                                        Edit
                                    </Button> 
                                </Col>
                            </Row>
                            <div className="mt-4 mb-2">
                                <span className="small">
                                    Profile
                                </span>
                            </div>
                            <p className="text-left">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Dicta sapiente earum, necessitatibus commodi eius pariatur 
                                repudiandae cum sunt officiis ex!
                            </p>
                           
                          
                            
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                      
                        <CardBody>
                        <CardTitle tag="h3">
                        Contact
                        </CardTitle>
                            <div className="contact-details-e d-flex justify-content-between mb-2">
                                <div className="contact-details-title">
                                    Phone
                                </div>
                                <div className="text-inverse">
                                     340-702-6720
                                </div>
                            </div>
                            <div className="contact-details-e d-flex justify-content-between mb-2">
                                <div className="contact-details-title">
                                    Mobile
                                </div>
                                <div className="text-inverse">
                                     340-702-6720
                                </div>
                            </div>
                            <div className="contact-details-e d-flex justify-content-between mb-2">
                                <div className="contact-details-title">
                                    Email
                                </div>
                                <div className="text-inverse">
                                    textinfo@gamil.com
                                </div>
                            </div>
                            <div className="contact-details-e d-flex justify-content-between mb-2">
                                <div className="contact-details-title">
                                    Facebook
                                </div>
                                <div className="text-inverse">
                                     facebook.com
                                </div>
                            </div>
                            <div className="contact-details-e d-flex justify-content-between mb-2">
                                <div className="contact-details-title">
                                    Skype
                                </div>
                                <div className="text-inverse">
                                Skype@gmail.com
                                </div>
                            </div>
                            
                        </CardBody>
                    </Card>
                </Col>
                
                <Col lg={4}>
                    <Card>
                      
                        <CardBody>
                        <CardTitle tag="h3">
                        Address
                        </CardTitle>
                            <div className="contact-details-e d-flex justify-content-between mb-2">
                                <div className="contact-details-title">
                                    Address
                                </div>
                                <div className="text-inverse">
                                Lorem ipsum dolor sit amet, consectetur.
                                </div>
                            </div>
                            <div className="contact-details-e d-flex justify-content-between mb-2">
                                <div className="contact-details-title">
                                Address 2
                                </div>
                                <div className="text-inverse">
                                Lorem ipsum dolor sit amet, consectetur.
                                </div>
                            </div>
                            <div className="contact-details-e d-flex justify-content-between mb-2">
                                <div className="contact-details-title">
                                    City
                                </div>
                                <div className="text-inverse">
                                Lorem ipsum
                                </div>
                            </div>
                            <div className="contact-details-e d-flex justify-content-between mb-2">
                                <div className="contact-details-title">
                                    State
                                </div>
                                <div className="text-inverse">
                                consectetur
                                </div>
                            </div>
                            <div className="contact-details-e d-flex justify-content-between mb-2">
                                <div className="contact-details-title">
                                    Zip code
                                </div>
                                <div className="text-inverse">
                                     340-702-6720
                                </div>
                            </div>
                            
                            
                        </CardBody>
                    </Card>
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
export default PersonalDetails