import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Testing() {
  const [users, setUsers] = useState();

  const fetchdata = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      console.log(res.data);
      setUsers(res.data);
    });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {users.map((data) => {
        return (
          <>
            <div className="card">
              <img src="" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">
                  Email Id:{data.email}
                  <br />
                  Username: {data.username}
                  <br />
                  Phone: {data.phone}
                  <br />
                  Website :{data.website}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
