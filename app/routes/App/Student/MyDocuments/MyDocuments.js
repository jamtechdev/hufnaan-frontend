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
    CardHeader,
    Card
} from '../../../../components';
import { DoculentLeftNav } from "../../../components/Documents/DocumentLeftNav";

import doc1 from '../../../../images/backend/doc-1.png'
import doc2 from '../../../../images/backend/doc-2.png'
import doc3 from '../../../../images/backend/doc-3.png'
import doc4 from '../../../../images/backend/doc-4.png'

const MyDocuments = () =>  (
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
                            <DoculentLeftNav/>
                        </Col>
                        <Col lg={12}>
                        <Card>
                        <CardHeader tag="h3" className="bg-gray text-black d-flex">
                            My Documents
                           </CardHeader>
                            <CardBody>
                            <Row>
            <Col lg={ 12 } className="mb-3">
                <h6 className="mb-2">
                    Images: Library
                   
                </h6>
                </Col>
                <Col lg={ 3 } className="mb-5">
                <figure className="figure p-3 doc-figure border-solid">
                   <img src={doc1}/>
                    <figcaption className="figure-caption text-center">
                        A caption for the above image.
                    </figcaption>
                </figure>
                </Col>
                <Col lg={ 3 } className="mb-5">
                <figure className="figure p-3 doc-figure border-solid">
                   <img src={doc2}/>
                    <figcaption className="figure-caption text-center">
                        A caption for the above image.
                    </figcaption>
                </figure>
                </Col>
                <Col lg={ 3 } className="mb-5">
                <figure className="figure p-3 doc-figure border-solid">
                   <img src={doc3}/>
                    <figcaption className="figure-caption text-center">
                        A caption for the above image.
                    </figcaption>
                </figure>
                </Col>
                <Col lg={ 3 } className="mb-5">
                <figure className="figure doc-figure p-3 border-solid">
                   <img src={doc4}/>
                    <figcaption className="figure-caption text-center">
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

 export default MyDocuments;