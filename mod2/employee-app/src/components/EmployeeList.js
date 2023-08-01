import EmployeeListItem from "./EmployeeListItem";
import '../App.css'

function EmployeeList() {
    return(
        <div className ="employeeList">
            <EmployeeListItem name="James King" occupation="President & CEO" />
            <EmployeeListItem name="Julie Taylor" occupation="VP of Marketing" />
            <EmployeeListItem name="Eugene Lee" occupation="CFO" />
            <EmployeeListItem name="John Williams" occupation="VP of Engineering" />
            <EmployeeListItem name="Ray Moore" occupation="VP of Sales" />
            <EmployeeListItem name="Paul Jones" occupation="QA Manager" />
        </div>
    )
}

export default EmployeeList;