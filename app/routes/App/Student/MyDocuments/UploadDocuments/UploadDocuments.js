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
    CardHeader,
    Card,
    CardFooter,
    CardTitle,
    Avatar,
    Nav,
    NavItem, 
    NavLink,
    HolderProvider,
    CardImg,
    CardImgOverlay
} from '../../../../components';
// import { DoculentLeftNav } from "./DoculentLeftNav";
// import logo from '../../../images/front/logo.png'
import avatars1 from '../../../../images/avatars/33.jpg'
function UploadDocuments() {
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
                        <Col lg={12}>
                            {/* <DoculentLeftNav/> */}
                        </Col>
                        <Col lg={12}>
                        <Card>
                            <CardBody>
                            <Row>
            <Col lg={ 12 } className="mb-3">
                <h6 className="mb-2">
                    Images: Library
                   
                </h6>
                </Col>
                <Col lg={ 3 } className="mb-5">
                <figure className="figure mr-2">
                   <img src={avatars1}/>
                    <figcaption className="figure-caption">
                        A caption for the above image.
                    </figcaption>
                </figure>
                </Col>
                <Col lg={ 3 } className="mb-5">
                <figure className="figure mr-2">
                   <img src={avatars1}/>
                    <figcaption className="figure-caption">
                        A caption for the above image.
                    </figcaption>
                </figure>
                </Col>
                <Col lg={ 3 } className="mb-5">
                <figure className="figure mr-2">
                   <img src={avatars1}/>
                    <figcaption className="figure-caption">
                        A caption for the above image.
                    </figcaption>
                </figure>
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
export default UploadDocuments