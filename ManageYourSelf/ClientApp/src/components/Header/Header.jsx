import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import DateTimeHeader from './DateTimeHeader';
import Taghvim from '../Common/Taghvim';
const HeaderComp = () => {

    return (
        <>
            <Row>
                <Col md={4}>
                    <DateTimeHeader />
                </Col>
                <Col md={4}>
                    <p>first</p>
                </Col>
                <Col md={4}>
                    <Taghvim />
                </Col>
            </Row>

        </>
    )
}
export default HeaderComp