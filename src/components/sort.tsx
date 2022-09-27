import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SortModule, { SortOptions, SortOrder } from "../models/sortModule";
import "./styles/main.css";
import "./styles/sort.css";

interface props {
  sortModule: SortModule;
  setSortHandler: (sortModule: SortModule) => void;
}

export default function Sort(props: props) {
  const { setSortHandler, sortModule } = props;

  return (
    <div className="form-container">
      Sort by
      <div className="form-control sortSelect">
        <FormControl>
          <InputLabel id="sortSelectLabel">Field</InputLabel>
          <Select
            className="sortSelect"
            labelId="sortSelectLabel"
            onChange={(e) =>
              setSortHandler(
                sortModule.buildSortModule(
                  "sortOption",
                  SortOptions[e.target.value as number]
                )
              )
            }
          >
            {SortOptions.map((option, index) => (
              <MenuItem value={index}>{option.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="form-control orderSelect">
        <FormControl>
          <InputLabel id="orderSelectLabel">Order</InputLabel>
          <Select
            className="orderSelect"
            labelId="orderSelectLabel"
            onChange={(e) =>
              setSortHandler(
                sortModule.buildSortModule("sortOrder", e.target.value)
              )
            }
          >
            <MenuItem value={SortOrder.ASC}>ASC</MenuItem>
            <MenuItem value={SortOrder.DESC}>DESC</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
