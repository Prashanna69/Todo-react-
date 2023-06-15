import React from "react";

const Body = ({ data, deleteListItem, completeListItem }) => {
  return (
    <>
      {data.map((ele) => {
        return (
          <main className="Body" key={ele.id}>
            <div className="Description">
              <span
                style={{
                  textDecoration:
                    ele.status === "Completed" ? "line-through" : "none",
                  color: ele.status === "Completed" ? "#1E1E1E" : "#e58a00",
                }}
              >
                {ele.task}
              </span>
              <h5
                style={{
                  textDecoration:
                    ele?.status === "Completed" ? "line-through" : "none",
                  color: ele?.status === "Completed" ? "#1E1E1E" : "whitesmoke",
                }}
              >
                {ele.desc}
              </h5>
            </div>
            <div className="Buttons">
              <button
                className="complete"
                onClick={(e) => {
                  completeListItem(ele.id, ele.status);
                }}
              >
                {ele.status === "Completed" ? "Pending" : "Complete"}
              </button>
              <button
                className="Delete"
                onClick={(e) => {
                  deleteListItem(ele.id);
                }}
              >
                Delete
              </button>
            </div>
          </main>
        );
      })}
    </>
  );
};

export default Body;
