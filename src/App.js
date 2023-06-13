import Heading from "./Heading";
import Input from "./Input";
import Body from "./Body";
import { useState } from "react";
function App() {
  const [data, setData] = useState([
    { id: 1, task: "demo", desc: "demo", status: "Pending" },
  ]);

  const formHandler = (data) => {
    setData((prevState) => {
      return [...prevState, data];
    });
  };
  const deleteListItem = (id) => {
    let newdata = [...data].filter((data) => data.id !== id);
    setData(newdata);
  };
  const completeListItem = (id) => {
    const task = data.filter((item) => item.id === id)[0];
    task.status = "Completed";
    setData((prev) => prev.filter((item) => item.id !== id).concat([task]));
  };
  return (
    <div className="App">
      <Heading />
      <Input inpData={formHandler} />
      <Body
        data={data}
        deleteListItem={deleteListItem}
        completeListItem={completeListItem}
      />
    </div>
  );
}

export default App;
