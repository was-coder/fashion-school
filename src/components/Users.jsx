import { React, useState } from "react";
import useFetch from "../hooks/useFetch";

function Users() {
  const [user, setUser] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${user}&results=100&seed=abc`
  );

  const PER_USER = 10;
  const users = 10;
  const nextUsers = user * PER_USER - PER_USER;
  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  if (!loading && error) {
    return <div>Error</div>;
  }

  return (
    <div className="container user-container">
      <h2 className="users-list">List of Users</h2>
      <div className="users">
        {data?.results
          .slice(nextUsers, nextUsers + PER_USER)
          .map((person, index) => {
            const name = `${person.name.title} ${person.name.first} ${person.name.last}`;
            return (
              <li
                key={name.toLowerCase().replaceAll(" ", "")}
                className="list-item"
              >{`${index + 1}.${name}`}</li>
            );
          })}

        <p className="users-list">
          Users: {user} of {users}
        </p>

        <div className="btn-container">
          {
            <button
              disabled={user <= 1}
              aria-disabled={user <= 1}
              onClick={() => setUser((prev) => prev - 1)}
              className="btn users-btn"
            >
              Previous
            </button>
          }

          {Array.from({ length: users }, (number, index) => index + 1).map(
            (number) => (
              <button onClick={() => setUser(number)} className="btn users-btn">
                {number}
              </button>
            )
          )}

          {
            <button
              disabled={user >= users}
              aria-disabled={user >= users}
              onClick={() => setUser((prev) => prev + 1)}
              className="btn users-btn"
            >
              Next
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Users;
