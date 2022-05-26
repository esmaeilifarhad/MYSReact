import React from "react";
import { Button, Modal } from "react-bootstrap";
import DutyCreateUpdate from "./DutyCreateUpdate";
import DutyDelete from './DutyDelete';


const DutyModal = (props) => {
    let comp = null
    
    if (props.type == 'create') {
        comp = <DutyCreateUpdate />
    }
    else if (props.type == 'update') {

        comp = <DutyCreateUpdate id={props.id} />
    }
    else if (props.type == 'delete') {

        comp = <DutyDelete id={props.id} />
    }
    else {

    }

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
export default DutyModal