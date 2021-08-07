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
    Media,
    CustomInput,
    Avatar
} from '../../../../components';

import avatars1 from '../../../../images/avatars/33.jpg'
function AccountDetails() {
    return (
        <React.Fragment>
            <div>
                 <Container fluid>
                     
                    <Row className="mt-3">
                       
                        <Col lg={12}>
                        <Card>
                            <CardHeader tag="h3" text-black>
                                Account Details
                            </CardHeader>
                            <CardBody>
                           <Row>
                               <Col lg={12}>
                               <div className="media">
                               
                               <div className="mr-4 align-self-center media-left media-middle">
                               <Avatar.Image
                               size="lg"
                               src={ avatars1 }
                              
                           />
                            </div>
                            <div className="media-body">
                                <span className="mt-0 h4 mb-1">Brian Swift</span>
                                <p className="mb-0 text-muted text-truncate">Officer</p>
                                </div>
                                </div>
                               </Col>
                               <Col lg={12}>
                                   <div className=" mt-5">
                                       <h4>CREDIT AND DEBIT CARDS</h4>
                                   </div>
                                   <div className="account-card-list ml-5">
                                   <Media className="mb-2 mt-3 bg-gray">
                                        <Media left middle className="mr-2">
                                            <CustomInput type="checkbox" label="Amal: Account No- 0123456789" />
                                        </Media>
                                      
                                    </Media>
                                   </div>
                                   <div className="account-card-list ml-5">
                                   <Media className="mb-2 mt-3 bg-gray">
                                        <Media left middle className="mr-2">
                                            <CustomInput type="checkbox"  label="Amal: Account No- 0123456789" />
                                        </Media>
                                        
                                    </Media>
                                   </div>
                                   <div className="account-card-list ml-5">
                                   <Media className="mb-2 mt-3 bg-gray">
                                        <Media left middle className="mr-2">
                                            <CustomInput type="checkbox"  label="Amal: Account No- 0123456789" />
                                        </Media>
                                        
                                    </Media>
                                   </div>
                               </Col>
                               <Col lg={12} className="text-right">
                               <Button color="success" className="mt-5" tag={ Link } to="/">
                               <i className="fa fa-edit mr-2"></i> Edit Details
                                    </Button> {' '}
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
export default AccountDetails