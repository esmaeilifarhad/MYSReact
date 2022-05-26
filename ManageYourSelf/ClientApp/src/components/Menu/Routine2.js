import React from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import CreateAndEditMenuForm from "./CreateAndEditForm";
import DeleteMenuForm from './DeleteMenuForm';



const Routine2 = () => {
    const location = useLocation();

    // console.log(location.pathname);
    // debugger
    return (

        <Switch>

            {/* <Route path="/DeleteMenu/:id" component={DeleteMenuForm} /> */}
            <Route path="/CreateAndEditMenuForm/:id" component={CreateAndEditMenuForm} />

            <Route path="/DeleteMenu/:id" render={(props) => <DeleteMenuForm {...props} query={location.query} />} />
            {/* <Route path="/DeleteMenu/:id" render={() => <DeleteMenuForm title={location.query.title} />} /> */}



            {/* <Route path="/DeleteMenu/:id" component={() => (<DeleteMenuForm myProp="value" />)} /> */}
            {/* <Route
                path="/DeleteMenu/:id"
                render={() => <DeleteMenuForm tt=""  />}
            />  */}

            {/*           
                <Route
                    path="/"
                    exact
                    render={() => <Course courses={indexCourses} />}
                />  */}
        </Switch>

    );
};

export default Routine2;
