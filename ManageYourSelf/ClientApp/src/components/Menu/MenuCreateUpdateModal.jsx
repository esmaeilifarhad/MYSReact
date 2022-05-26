import React from "react";
import { Button, Modal } from "react-bootstrap";
import FormDutyCreate from "../Duty/FormDutyCreate";
import FormDutyEdit2 from "../Duty/FormDutyEdit2";
import CreateAndEditMenuForm from "./CreateAndEditForm";
// import FormDutyEdit2 from './FormDutyEdit2';

const MenuCreateUpdateModal = (props) => {
    let comp = null
    if (props.id == 0) {
        comp = <CreateAndEditMenuForm id={0} />
    }
    else {
        comp = <CreateAndEditMenuForm id={props.id} />

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
export default MenuCreateUpdateModal