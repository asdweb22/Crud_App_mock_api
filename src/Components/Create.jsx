import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Create() {




    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const header = { "Access-Control-Allow-Origin": "*" };

    const history = useNavigate();
    //Create Logic 
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("clicked");


        //Endpoint to send Data
        axios.post("https://64758f36e607ba4797dc08d4.mockapi.io/crud-users",
            {
                name: name,
                email: email,
                header
            })
            .then(() => {
                history("/read")
            });
        console.log("Data Submitted Successfully: ", { name, email });
    }

    return (
        <div className="container my-5 py-3 jumbotron shadow">
            <div className="d-flex justify-content-between">
                <h2>Create your Record</h2>
                <div>
                    <Link to="/read" className="btn btn-info btn-sm">Show Data</Link>
                </div>
            </div>

            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>


                <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
                <Link to="/" className="btn btn-secondary ml-2">Back</Link>
            </form>
        </div>
    )
}
