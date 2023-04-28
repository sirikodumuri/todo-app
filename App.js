import {useState} from "react"

function App() {

const [allTasks, setallTasks] = useState(["Playing", "Eating", "Dancing"]);

const [myTasks, setmyTasks] = useState("")

function collectTask(event)
{
  setmyTasks(event.target.value)
}

function submitted()
{
  setallTasks( [...allTasks, myTasks] )

  setmyTasks("")
  
}

  return (
    <div>
       Enter Task: <input type="text" onChange={collectTask} value={myTasks}/>
       <button onClick={submitted}>Submit</button>

      {allTasks.map(function(i)
      {
        return <li>{i}</li>
      }
      )}

    </div>
  );
}

export default App;
