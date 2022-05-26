import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setCloseDialogModalAction, setShowDialogModalAction } from "../../Toolkit/ModalSlice";
import FormDutyCreate from "../Duty/FormDutyCreate";

function ModalForm() {
    const dispatch = useDispatch()

    const isShow = useSelector(state => state.modalStatus.modalStatus);
    const tag = useSelector(state => state.modalStatus.tag);
    const title = useSelector(state => state.modalStatus.title);


    //--------------
    useEffect(() => {

        return () => null
    }, [])

    const handleShow = () => {
        dispatch(setShowDialogModalAction());
    }
    const handleClose = () => {
        dispatch(setCloseDialogModalAction());
    }

    return (
        <>


            <Modal
                show={isShow}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >

                <div className="row" style={{ margin: "10px" }}>
                    <div className="col-4">
                        <button onClick={handleClose}>*</button>
                    </div>
                    <div className="col-4" style={{ textAlign: "center", whiteSpace: "nowrap" }}><span className="smoke">{title}</span> </div>
                    <div className="col-4"></div>
                </div>
                <hr></hr>


                <Modal.Body className="smoke2">
                    {/* <FormDutyCreate /> */}
                    {tag}
                </Modal.Body>

                <hr></hr>
                {/* <Modal.Footer> */}
                <div style={{ direction: "ltr" }}>
                    <button className="deleteButton" style={{ margin: "0px 0px 8px 4px" }} onClick={handleClose}>
                        Close
                    </button>
                </div>

                {/* </Modal.Footer> */}
            </Modal>
        </>
    );
}



export default ModalForm