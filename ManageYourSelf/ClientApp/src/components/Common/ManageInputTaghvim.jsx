import React, { useState } from 'react'

import { Tab, Tabs } from 'react-bootstrap';
import DutyCreateUpdate from './../DutyTask/DutyCreateUpdate';
const ManageInputTaghvim = ({ date, eventData }) => {
    debugger
    var event = "رویداد خاصی وجود ندارد"
    if (eventData == undefined) {

    }
    else {
        event = eventData.label
    }

    return (
        <>
            <Tabs
            >
                <Tab eventKey="home" title="وظایف">

                    <DutyCreateUpdate date={date} />

                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p>{date}</p>
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                    <p>{event}</p>
                </Tab>
            </Tabs>
        </>
    )
}
export default ManageInputTaghvim