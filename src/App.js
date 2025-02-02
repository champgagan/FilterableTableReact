import "./App.css";
import { useEffect } from "react";
import FilterableTable from "./components/FilterableTable";
import useFetch from "./hooks/useFetch";

function App() {
  const URL = process.env.REACT_APP_USER_API;
  const { data, loading, error, fetchData } = useFetch(URL);

  const renderElse = () => {
    if (error) {
      return "Something went wrong with the API";
    } else {
      return "";
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {loading && <p>Fetching data from the network</p>}
      {!error ? <FilterableTable userdata={data} /> : renderElse()}
    </div>
  );
}

export default App;
