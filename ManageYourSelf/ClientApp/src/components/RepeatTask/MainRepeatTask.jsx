import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import ListRepeatTask from './ListRepeatTask'
import ListRepeatTaskManage from './ListRepeatTaskManage'


const MainRepeatTask = () => {
    // const [isShow, setIsShow] = useState(false)
    return (
        <>
            <Row>
                <Col md={6}>
                    <ListRepeatTaskManage />
                </Col>
                <Col md={2} >
                    <ListRepeatTask typeTask={0} />
                </Col>
                <Col md={2}>
                    <ListRepeatTask typeTask={1}/>
                </Col>
                <Col md={2}>
                    <ListRepeatTask typeTask={2}/>
                </Col>
             
            </Row>

            {/* <Row>
                <Col md={12} >
                    <ListRepeatTaskManage/>
                </Col>
            </Row> */}
        </>
    )
}
export default MainRepeatTask