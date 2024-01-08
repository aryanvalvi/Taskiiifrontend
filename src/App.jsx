import React, { useEffect, useState } from "react";
import axios from "axios";
import Update from "./Update";
import { Link } from "react-router-dom";
const App = () => {
  const [getAll, setGetAll] = useState([]);
  const [pushTask, SetPushTask] = useState("");
  const [workdone, SetWorkdon] = useState(false);
  const [rerender, SetRerender] = useState(false);
  console.log(workdone);
  const GetAll = () => {
    axios
      .get("https://taskiiibackeend.onrender.com/api/todo/")
      .then((res) => {
        setGetAll(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetAll();
  }, [rerender]);

  const AddTask = (edata) => {
    const ronaldo = {
      message: edata,
      completed: workdone,
    };
    axios
      .post("https://taskiiibackeend.onrender.com/api/todo/Create/", ronaldo)
      .then((res) => {
        console.log("data bhej diya", res);
        SetRerender(!rerender);
      })
      .catch((err) => console.log(err));
  };

  const TaskDelete = (e) => {
    const Id = {};
    axios
      .delete(`https://taskiiibackeend.onrender.com/api/todo/delete/${e}`)
      .then((res) => {
        console.log("Deleted");
        SetRerender(!rerender);
      })
      .catch((err) => console.log(err));
  };

  const ChnageButtonvalue = () => {
    SetWorkdon(!workdone);
  };

  return (
    <div className="Container">
      <h1 className="h1">TASKIII</h1>
      <div className="chota-container">
        <input
          className="search"
          type="text"
          onChange={(e) => SetPushTask(e.target.value)}
        />
        <p>Completed</p>
        <input
          className="check"
          // value={workdone}
          checked={workdone}
          onChange={ChnageButtonvalue}
          type="checkbox"
        />
      </div>
      <button className="Addtask" onClick={() => AddTask(pushTask)}>
        Add Task
      </button>

      {/* <button onClick={GetAll}>GetAll</button> */}

      <div className="allget">
        {getAll.map((e) => {
          return (
            <div key={e._id} className="task-items">
              <p>{e.message}</p>

              <div className="items">
                <input className="box" type="checkbox" checked={e.completed} />

                <button className="delete" onClick={() => TaskDelete(e._id)}>
                  Delete
                </button>
                <Link to={`/Update/${e._id}`}>
                  <button className="update"> Update</button>
                </Link>
              </div>
              {/* {isVisible && <Update value={e._id}></Update>} */}
              {/* <button onClick={() => TaskUpdate(e._id)}>Update</button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
