import "./App.css";
import CountryList from "./components/countryList";
import Filter from "./components/filter";
import { useState } from "react";
import FilterRequest from "./models/filterRequest";
import Sort from "./components/sort";
import SortModule from "./models/sortModule";

function App() {
  const [filter, setFilter] = useState<FilterRequest>(new FilterRequest());
  const [sortModule, setSortModule] = useState<SortModule>(new SortModule());

  return (
    <div className="App">
      <div className='filter-sort'>
        <Filter filter={filter} selectFilterHandler={setFilter} />
        <Sort sortModule={sortModule} setSortHandler={setSortModule} />
      </div>
      <CountryList filter={filter} sortModule={sortModule} />
    </div>
  );
}

export default App;
