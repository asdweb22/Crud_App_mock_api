import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



export default function Read() {

    const [usersdata, setUserdata] = useState([]);

    const [tabledark, setTabledark] = useState("");




    const getData = () => {
        axios.get("https://64758f36e607ba4797dc08d4.mockapi.io/crud-users")
            .then((res) => {
                console.log("Complete Response from Api : ", res);
                console.log("Only Your Data Object Response : ", res.data);
                setUserdata(res.data);
            })

    }

    const handledelete = (id) => {
        axios.delete(`https://64758f36e607ba4797dc08d4.mockapi.io/crud-users/${id}`)
            .then(() => {
                getData();
            })


    }

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="container">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox"
                    onClick={() => {
                        if (tabledark === "table-dark") {
                            setTabledark("");
                        }
                        else {
                            setTabledark("table-dark");
                        }
                    }} />
                <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div>

            <div className="d-flex justify-content-between">
                <h2>Users Data</h2>

                <div>
                    <Link to="/create" className="btn btn-primary btn-sm">Create</Link>
                </div>
            </div>

            <table className={`table table-hover ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        usersdata.map((ele) => {
                            return (
                                <>
                                    <tr key={ele.id}>
                                        <th>{ele.id}</th>
                                        <td>{ele.name}</td>
                                        <td>{ele.email}</td>
                                        <td>
                                            <Link to="/update" className="btn btn-success btn-sm" onClick={() => {
                                                setToLocalStorage(
                                                    ele.id,
                                                    ele.name,
                                                    ele.email
                                                )
                                            }}>Update</Link>
                                            <button className="btn btn-danger btn-sm ml-2" onClick={() => handledelete(ele.id)}>Delete</button>
                                        </td>

                                    </tr>
                                </>
                            )
                        })
                    }



                </tbody>
            </table>

        </div>
    )
}
