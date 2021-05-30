import React, { Component } from 'react';
// import { products } from './products'

import {
    Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            products: [],
        }
    }

    componentDidMount() {
        fetch("http://localhost:8787/products")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    products: result.data
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            }
        )
        .catch(error => {
            this.setState({ error, isLoading: false })
        });
    }

    render() {
        const { error, isLoaded, products } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Container>
                    <h2>Product</h2>
                    <Row>
                        {
                            products.map((product, index) => {
                                return (
                                    <Col sm="4" key={index}>
                                        <div>
                                            <Card>
                                                <CardImg top width="100%" src={product.imageUrl} />
                                                <CardBody>
                                                    <CardTitle tag="h5">{product.name}</CardTitle>
                                                    <CardText>{product.description}</CardText>
                                                    <Button>Button</Button>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            );
        }
    }
}

export default Product;