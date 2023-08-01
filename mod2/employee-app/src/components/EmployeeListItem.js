import '../App.css'; 


function EmployeeListItem(prop) {
    return (
        <div className="employeeListItem">
            <div className="profilePic">
                <img src='mod2/employee-app/src/image/icons8-male-user-48.png'/>
           
            <div >
            <h3>{prop.name}</h3>
            <p>{prop.occupation}</p>
            </div>
            </div>
        </div>
    )
}

export default EmployeeListItem;