import React from "react";
import { Col, Row, Container } from 'react-bootstrap';
import { useDeleteMenu } from "../../ReactQuery/MenuQuery";


const DeleteMenuForm = (props) => {
    const remove = useDeleteMenu()
    const { query, history, match } = props
    const id = match.params.id
    var title = ""

    if (query != undefined) {
        title = query.title
    }
    else {

    }


    const goToMainPage = () => {
        history.push("/Menu")
    }


    // const deleteMenu = async (x) => {
    //     debugger
    //     remove(x)
    // }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={4}>
                    </Col >
                    <Col md={4}>
                        <p>آیا قصد دارید رکورد {title} را حذف نمایید ؟ </p>
                        <button onClick={goToMainPage} className="btn btn-warning" >بازگشت</button>
                        <span> | </span>
                        <button onClick={() => remove.mutate(id)} className="btn btn-danger" >حذف</button>
                    </Col >
                    <Col md={4}>
                    </Col >
                </Row>
            </Container>


        </>

    )
}
export default DeleteMenuForm