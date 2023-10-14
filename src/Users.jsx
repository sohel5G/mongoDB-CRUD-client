import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    console.log(users)
    const handleDelete = _id => {

        fetch(`http://localhost:3000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remainingUsers = users.filter(user => user._id !== _id);
                    setUsers(remainingUsers)
                    console.log(remainingUsers)
                    alert('One user deleted!')
                }
            })

        console.log(_id)
    }
    return (
        <div>
            <Link to={'/'}>Add Users | </Link>
            <Link to={'/users'}>Delete/Update Users</Link>

            <h1>All users {users.length}</h1>
            <div>
                {
                    users.map(user => <p key={user._id}><button onClick={() => handleDelete(user._id)}>X</button> - {user.name} : {user.email} : {user._id} <button> <Link to={`/users/${user._id}`}>Update</Link> </button></p>)
                }
            </div>
        </div>
    );
};

export default Users;


