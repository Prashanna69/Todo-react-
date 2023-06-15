import Heading from "./Heading";
import Input from "./Input";
import Body from "./Body";
import { useEffect, useState } from "react";

const getLocalItems = () => {
  let storedArray = JSON.parse(localStorage.getItem("data"));
  console.log(storedArray);
  return storedArray || [];
};
function App() {
  const [data, setData] = useState([]);
  const formHandler = (sData) => {
    const newData = [...data, sData];
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  };
  const deleteListItem = (id) => {
    let newdata = [...data].filter((data) => data.id !== id);
    localStorage.setItem("data", JSON.stringify(newdata));
    setData(newdata);
  };
  const completeListItem = (id, status) => {
    const task = data.filter((item) => item.id === id)[0];
    status === "Completed"
      ? (task.status = "Pending")
      : (task.status = "Completed");
    setData((prev) => prev.filter((item) => item.id !== id).concat([task]));
  };
  useEffect(() => {
    const tasks = getLocalItems();
    if (tasks) {
      setData(tasks);
    }
  }, []);

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
