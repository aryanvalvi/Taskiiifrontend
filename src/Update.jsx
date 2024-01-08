import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Update = () => {
  const { idParam } = useParams();
  const [Thatone, SetThatone] = useState([]);
  console.log(Thatone);
  const [updatedMessage, setUpdatedMessage] = useState();
  // const istrueornot = Thatone[0].completed;
  const [alreadytik, setAlreadytik] = useState();
  const [workdone, SetWorkdon] = useState(false);
  console.log(workdone);

  useEffect(() => {
    button();
    // setAlreadytik(Thatone[0].completed);
    // console.log(Thatone);
  }, []);

  const button = async () => {
    try {
      const res = await axios.get(
        `https://taskiiibackeend.onrender.com/api/todo/${idParam}`
      );
      SetThatone([res.data]);

      SetWorkdon(res.data.completed);
      console.log(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  const UpdateValue = (data) => {
    const fuck = {
      message: data,
      completed: workdone,
    };
    axios.patch(
      `https://taskiiibackeend.onrender.com/api/todo/update/${idParam}`,
      fuck
    );
  };
  const ChnageButtonvalue = () => {
    SetWorkdon(!workdone);
  };

  return (
    <div className="Container">
      {/* <button onClick={() => button}>btn</button> */}
      {/* {Thatone} */}
      {Thatone.map((e) => {
        return (
          <div className="updatecontainer">
            <div className="updatechota">
              <h1>Message:-</h1>
              <p>{e.message}</p>
            </div>
            <h1>
              Completed
              <input
                className="chec"
                // value={workdone}
                checked={workdone}
                onChange={ChnageButtonvalue}
                type="checkbox"
              />
            </h1>

            <input
              className="input"
              type="text"
              value={updatedMessage}
              onChange={(e) => setUpdatedMessage(e.target.value)}
            />
            <button
              className="Addtask"
              onClick={() => UpdateValue(updatedMessage)}
            >
              Update
            </button>
          </div>
        );
      })}
      <Link className="bth" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Update;
