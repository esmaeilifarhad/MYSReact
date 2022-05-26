import React from "react";
import { Button, Modal } from "react-bootstrap";
import FormDutyCreate from "./FormDutyCreate";
import FormDutyEdit2 from './FormDutyEdit2';

const DutyCreateUpdateModal = (props) => {
    let comp = null
    if (props.id == 0) {
        comp = <FormDutyCreate />
    }
    else {
        
        comp = <FormDutyEdit2 id={props.id} parentChange={props.onHide} />
    }
    console.log(props)
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {comp}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    )
}
export default DutyCreateUpdateModal