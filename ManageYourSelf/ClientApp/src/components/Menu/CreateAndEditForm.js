import React, { useState, useEffect } from "react";
import { createUpdateMenu, getItemById } from "../../Api/MenuApi";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { handleChangeMethod } from './../../Helper/Helper';
import { useQuery, useMutation, queryCache, QueryClient, useQueryClient } from "react-query"



const CreateAndEditMenuForm = ({ match, history, id }) => {
    const queryClient = useQueryClient()
    
    if(match==undefined)
    {
       // var id = parseInt(match.params.id)
    }
    else
    {
        var id = parseInt(match.params.id)
    }
    
    const [singleMenu, setSingleMenu] = useState({})

    useEffect(async () => {
        const menu = await getItemById(id)
        setSingleMenu(menu)
    }, [match])


    function handleChange(e) {

        var obj = { ...singleMenu }
        const data = handleChangeMethod(e, obj)
        setSingleMenu(data)

    }

    const mutation = useMutation(createUpdateMenu, {
        onSuccess: () => {

            queryClient.invalidateQueries('ListMenu')
        }
    })

    async function handleSubmit(e) {

        e.preventDefault()

        //  var res = await createUpdateMenu(singleMenu)

        mutation.mutate(singleMenu)


        //  queryClient.invalidateQueries('ListMenu')
        goToMainPage()


    }
    const goToMainPage = () => {
        history.push("/Menu")
    }
    return (
        <>


            <Container fluid>
                <Row>
                    <Col md={4}>

                        <p>{id}</p>
                        <p>{singleMenu.title}</p>
                        <p>{singleMenu.action}</p>



                    </Col>
                    <Col md={4}>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">عنوان</label>
                                <input type="text" value={singleMenu.title} className="form-control" name="title" onChange={handleChange} placeholder="عنوان" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>

                            <div className="form-group">
                                <label for="exampleInputEmail1">مسیر</label>
                                <input type="text" value={singleMenu.action} className="form-control" name="action" onChange={handleChange} placeholder="مسیر" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>

                            <div className="form-group">
                                <label>ترتیب</label>
                                <input type="number" value={singleMenu.order} className="form-control"
                                    name="order" onChange={handleChange}
                                    placeholder="order" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>





                            <br></br>
                            <button type="submit" className="btn btn-primary">ارسال</button>

                            <span> | </span>

                            <button onClick={goToMainPage} className="btn btn-warning" >بازگشت</button>


                        </form>

                    </Col>
                    <Col md={4}>
                    </Col>
                </Row>

            </Container>


        </>
    )
}
export default CreateAndEditMenuForm