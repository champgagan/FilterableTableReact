import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import FilterableTable from "./components/FilterableTable";

function App() {
  const [userdata, setUserData] = useState([]);
  const [err, setErr] = useState(false);

  const renderElse = () => {
    if (err) {
      return "Something went wrong with the API";
    } else {
      return "loading... please make sure node api is up and running at localhost";
    }
  };

  useEffect(() => {
    async function fetchusers() {
      const { data } = await axios.get(process.env.REACT_APP_USER_API);
      if (data.success) {
        setUserData(data.data);
      } else {
        setErr(true);
      }
    }
    fetchusers();
  }, []);

  return (
    <div className="App">
      {!err ? <FilterableTable userdata={userdata} /> : renderElse()}
    </div>
  );
}

export default App;
