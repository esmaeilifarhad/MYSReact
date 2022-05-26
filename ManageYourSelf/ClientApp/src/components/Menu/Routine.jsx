import React from "react";
import { Switch, Route } from "react-router-dom";
import Taghvim from "../Common/Taghvim";
import DutyList from "../Duty/DutyList";
import Test from "../Duty/Test";
import { useLocation } from 'react-router-dom'
import Home from '../Home/Home';
import MenuList from "./MenuList";
import CreateAndEditMenuForm from "./CreateAndEditForm";
import ListRepeatTask from "../RepeatTask/ListRepeatTask";
import MainRepeatTask from "../RepeatTask/MainRepeatTask";
import MainDuty from "../Duty/MainDuty";
import DutyPart from "../DutyTask/DutyPart";



const Routine = () => {
    const location = useLocation();
   // console.log(location.pathname);

    return (

        <Switch>

            <Route path="/Duty" component={MainDuty} />
            <Route path="/Menu" component={MenuList} />
            <Route path="/Taghvim" component={Taghvim} />
            <Route path="/Test" component={Test} />
            <Route path="/RepeatTask" component={MainRepeatTask} />
            {/* <Route path="/RepeatTask" render={()=><ListRepeatTask typeTask={1}/>}  /> */}
            <Route path="/" exact component={Home} />
            <Route path="/DutyPart"  component={DutyPart} />
            {/* <Route path="/CreateAndEditMenuForm/:id" component={CreateAndEditMenuForm} /> */}
            {/*           
                <Route
                    path="/"
                    exact
                    render={() => <Course courses={indexCourses} />}
                />  */}
        </Switch>

    );
};

export default Routine;
