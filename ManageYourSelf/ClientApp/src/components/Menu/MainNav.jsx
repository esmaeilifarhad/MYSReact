import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, withRouter } from 'react-router-dom';
import { useQueryMenuList } from "../../ReactQuery/MenuQuery";


const MainNav = ({ match, history, location }) => {

    var { data = [], isLoading } = useQueryMenuList()



    const style_ul = {
        listStyleType: "none",
        margin: "20px 0px 20px 0px",
        backgroundColor: "black",
        padding: "9px"
    }
    const styleMenu = {
        display: "inline",
        with: "30px",
        borderRadius: "5px"
    }
    const styleForA = {

        padding: "8px",
        backgroundColor: "#dddddd",
        textDecoration: "none",
        borderRadius: "15px 0px 5px 0px",
       
        margin: "1px"

    }
    return (

        <ul style={style_ul}>
            <li className="menuLi" style={styleMenu}><NavLink className={location.pathname === '/' ? "activeLink" : ""} style={styleForA} to="/"> خانه </NavLink></li>

            {
                data.map((item, index) => (
                    <li className="menuLi" style={styleMenu}><NavLink className={location.pathname === `/${item.action}` ? "activeLink" : ""}
                        style={styleForA} to={`/${item.action}`}> {item.title} </NavLink></li>
                ))
            }



        </ul>

    );
};

export default withRouter(MainNav);
