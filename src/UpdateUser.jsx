import { Link, useLoaderData } from "react-router-dom";



const UpdateUser = () => {

    const loadedUser = useLoaderData();

    console.log(loadedUser)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email }

        fetch(`http://localhost:3000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    alert('This user updated')
                }
            })
    }

    return (
        <div>

            <Link to={'/'}>Add Users | </Link>
            <Link to={'/users'}>Delete/Update Users</Link>

            <h1>Update This user : </h1>

            <form onSubmit={handleSubmit}>
                <input name="name" type="text" defaultValue={loadedUser?.name} />
                <input name="email" type="email" defaultValue={loadedUser?.email} />
                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default UpdateUser;
