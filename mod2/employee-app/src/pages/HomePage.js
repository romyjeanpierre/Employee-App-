import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import EmployeeList from "../components/EmployeeList";
import '../App.css'

function Homepage () {
    return(
        <div className="homepage">
        <Header header="Employee Directory"/>
        <Searchbar />
        <EmployeeList />

        </div>
    )
}

export default Homepage;