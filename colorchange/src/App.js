import "./App.css";
import Select from "react-select";
import { useState } from "react";

function App() {
  var colors = [
    {
      value: 1,
      label: "gold",
    },
    {
      value: 2,
      label: "grey",
    },
    {
      value: 3,
      label: "yellow",
    },
    {
      value: 4,
      label: "red",
    },
  ];

  var [setbgcolor,ddlvalue]=useState(colors.label)
  var handle=e=>{
    ddlvalue(e.label)
  }
  return (
    <div>
      <style>{'body {background-color:'+setbgcolor+'}'}</style>
      <Select options={colors} onChange={handle}></Select>
      <center>
        <b>The background color is: {setbgcolor}</b>
      </center>
    </div>
  );
}

export default App;