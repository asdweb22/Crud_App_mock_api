import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Update() {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios
            .put(
                `https://64758f36e607ba4797dc08d4.mockapi.io/crud-users/${id}`,
                {
                    name: name,
                    email: email
                }
            ).then(() => {
                navigate("/read");
            });
    }

    return (
        <div className="container my-5 py-3 jumbotron shadow">
            <h2>Update Data</h2>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter Name</label>
                    <input type="text" className="form-control"
                        onChange={(e) => { setName(e.target.value) }}
                        value={name} />

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control"
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>


                <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Submit</button>
            </form>
        </div>
    )
}
