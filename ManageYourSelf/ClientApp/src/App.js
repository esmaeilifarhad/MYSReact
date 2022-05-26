import React, { Component } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import  Counter  from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
        <>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        </Layout>

         <Container fluid>
                   

                    <Row>
                        <Col md={6}>
                          gg
                      </Col>
                      <Col md={6}>
                          gg
                      </Col>
                    </Row>
                    <Row style={{ padding: "0px 0px 75px 0px" }}>
                        <Col md={12}>
                           gg
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            gg
                        </Col>
                    </Row>

                </Container>
</>
    );
  }
}
