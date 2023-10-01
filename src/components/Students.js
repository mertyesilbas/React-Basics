const Student = (props) =>
    {
    // Destructuring Props
    const {firstName, lastName, email} = props.student
    const {data} = props
    return (<div>
        <h1>
            Students Details
        </h1>
        <p>
            Student first name: {firstName}
        </p>
        <p>
            Student last name: {lastName}
        </p>
        <p>
            Student email address: {email}
        </p>
        <p>
            Skills: {data}
        </p> 
    </div>)
    }

export default Student