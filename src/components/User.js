import {useState} from "react";

const User = () => {
    const [firstName, setFirstName] = useState('Ziya')
    const [lastName, setLastName] = useState('Laz')
    const [email, setEmail] = useState('lazziya@gmail.com')

    const [user, setUser]  = useState({
        firstName:'Güllü',
        lastName:'Erhan',
        email:'gllu@gmail.com'
    }) 
    function updateUser() {
        setFirstName('Ali')
        setLastName('Kılıç')
        setEmail('alikilic@gmail.com')
    }
    return (
        <div>
            <h1>
                User Details
            </h1>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>

            <button onClick={updateUser}>Update User</button>
        </div>)
}

export default User