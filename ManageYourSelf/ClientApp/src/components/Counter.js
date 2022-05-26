import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [duty, setDuty] = useState([])
    useEffect(async () => {


        debugger
        ///http://pushakshik.ir/duty
        //https://localhost:7083/duty
        await axios.get('https://localhost:7083/duty')
            .then((response) => {
                debugger
                setDuty(response.data)
                debugger
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
            }).catch(err => {
                console.log(err)
            });

    }, [])

    return(
        <>
            {
                duty.map((item, index) => (
                <p>{item.title}</p>
                )
                )
            }
        </>
    )
}
export default Counter
