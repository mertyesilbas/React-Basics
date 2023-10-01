import Welcome from "./components/Welcome";
import Greeting from "./components/Greeting";
import MC, {FirstComponent, SecondComponent} from "./components/MyComponent";
import HelloWorld from "./components/HelloWorld";
import Student from "./components/Students";
import Employee from "./components/Employee";
import User from "./components/User";
import EventHandling from "./components/EventHandling";
import ConditionRendering from "./components/ConditionRendering";

function App() {

    const student = {
        firstName: "Mert",
        lastName: "Yeşilbaş",
        email: "my@gmail.com"
    }

    const skills = [
        'JAVA', 'JavaScript', 'Pascal'
    ]
    return (// <div className="App">
        //     <Welcome name={"Mehmet"}/>
        // </div>
        <div>
            <Welcome name={"Jale"}/>
            <Greeting name={"Can"}/>
            <Greeting name={"Rıza"}/>
            <FirstComponent/>
            <SecondComponent/>
            <MC/>
            <HelloWorld/>
            <Student student={student}/>
            <Student student={student} data={skills}/>
            <Employee />
            <User />
            <EventHandling />
            <ConditionRendering />
        </div>);
}


export default App;