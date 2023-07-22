
import { Getbanner } from '../api';
import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';

import { Image } from 'react-bootstrap';
const Banner = () => {
    const Main_URL = "https://naksa.org";
    const [ubannner, setBanner] = useState([]);
    const [loading, setloading] = useState(false);
    const Getbannerdata = () => {
        setloading(true);
        Getbanner().then(res => {
            if (res) {
                if (res.data === "No Rows Found") {
                    setloading(false);
                    setBanner([]);
                } else {
                    console.log(res.data);
                    setloading(false);
                    setBanner(res.data);
                }


            }
        })
    }

    useEffect(() => {
        Getbannerdata();
    }, [])
    return (
        <>
            <div>
                <div className="content-body">
                    <div className='container-fluid'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Banner</th>
                                    {/* <th>Last Name</th>
          <th>Username</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td key={ubannner.id}>{ubannner.id}</td>

                                    <td>{
                                        ubannner.map(item => (
                                            <img src={Main_URL + "/banner/" + item.banimage}
                                             height={300} width={300} alt="Not found" />
                                        ))
                                    }
                                    </td>  {
                                        loading === true ? <h1>loading</h1> : <h1></h1>
                                    }

                                </tr>

                            </tbody>
                        </Table>


                        {/*          
                {banner.map(element => {
                    return(
                        <img src={element} alt="..."  style={{maxHeight: "180px"}} className="col-sm-4 img-thumbnail"></img>
                    );
                })}
          */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner;