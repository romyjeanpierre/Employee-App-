import '../App.css'

function EmployeeInfo (prop) {
    return(
        <div className="employeeInfo">
        <h3>{prop.name}</h3>
        <p>{prop.occupation}</p>
        </div>
    )
}

export default EmployeeInfo;