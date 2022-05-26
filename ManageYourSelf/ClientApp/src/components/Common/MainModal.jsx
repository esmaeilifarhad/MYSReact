import React from "react";
import { Button, Modal } from "react-bootstrap";


const MainModal = (props) => {

    // let comp = null

    // switch (key) {
    //     case type=="CreateRepeatTask":
    //         comp = <DutyCreateUpdate />
    //         break;

    //     default:
    //         break;
    // }
    //------------------------------------------------------------------------

    // if (props.type == 'create') {
    //     comp = <DutyCreateUpdate />
    // }
    // else if (props.type == 'update') {

    //     comp = <DutyCreateUpdate id={props.id} />
    // }
    // else if (props.type == 'delete') {

    //     comp = <DutyDelete id={props.id} />
    // }
    // else {

    // }

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
                {props.comp}
            </Modal.Body>
            <Modal.Footer>
                <Button className="closeModalbtn" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    )
}
export default MainModal