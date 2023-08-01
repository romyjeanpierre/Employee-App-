import EmployeeInfo from "../components/EmployeeInfo";
import Header from "../components/Header";
import '../App.css'

function EmployeePage() {
    return(
        <div className="employeePage"> 
        <Header header="Employee" />
        <div>

        </div>
            <div>

            <Profile name="Julie Taylor" occupation="VP of Marketing"/>
            </div>
            <EmployeeInfo name="Call Office" occupation="781-000-0002"/>
            <EmployeeInfo name="Call Mobile" occupation="617-000-0002" />
            <EmployeeInfo name="SMS" occupation="617-000-0002" />
            <EmployeeInfo name="Email" occupation="jtaylor@fakemail.com" />
        </div>
    );
}


function Profile(prop) {
    return(
        <div className="profile1">
            <div className="profilePic">
            <img src='mod2/employee-app/src/image/icons8-male-user-48.png'/>

            <div>
            <h3>{prop.name}</h3>
            <p>{prop.occupation}</p>
            </div>
            </div>
        </div>
    );
}
export default EmployeePage;