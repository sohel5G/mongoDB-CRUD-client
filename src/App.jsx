import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('User added successfully')
          form.reset();
        }
      })
  }

  return (
    <>
      <Link to={'/'}>Add Users | </Link>
      <Link to={'/users'}>Delete/Update Users </Link>

      <h1>mongoDB CRUD Client side</h1>
      <h1>Add Users</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" placeholder='Name' name='name' />
        <input type="email" placeholder='email' name='email' />
        <input type="submit" value="Add this user" />
      </form>

    </>
  )
}

export default App

