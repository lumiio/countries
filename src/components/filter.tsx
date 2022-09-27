import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControl,
} from "@mui/material";
import { useRef } from "react";
import FilterRequest, {
  FilterFields,
  FilterOperators,
  FilterSelect,
} from "../models/filterRequest";

import "./styles/main.css";
import "./styles/filter.css";

interface props {
  filter: FilterRequest;
  selectFilterHandler: (filter: FilterRequest) => void;
}

export default function Filter(props: props) {
  const { selectFilterHandler, filter } = props;
  const valueRef = useRef<HTMLInputElement>();

  return (
    <div className="form-container">
      Filter
      <div className="form-control filterFieldSelect">
      <FormControl >
        <InputLabel id="fieldSelectLabel">Field</InputLabel>
        <Select
          labelId="fieldSelectLabel"
          className="filterFieldSelect"
          label="Field"
          onChange={(e) =>
            selectFilterHandler(
              filter.buildFilter(FilterSelect.Field, e.target.value)
            )
          }
        >
          {FilterFields.map((field, index) => (
            <MenuItem value={index}>{field.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      <div className="form-control filterOperatorSelect">
      <FormControl>
        <InputLabel id="operatorSelectLabel">Operator</InputLabel>
        <Select
          labelId="fieldSelectLabel"
          className="filterOperatorSelect"
          label="Operator"
          onChange={(e) =>
            selectFilterHandler(
              filter.buildFilter(FilterSelect.Operator, e.target.value)
            )
          }
        >
          {FilterOperators.map((field, index) => (
            <MenuItem value={index}>{field.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      
      <div className="form-control" id="valueInput">
        <TextField
          label="Value"
          inputRef={valueRef}
          onBlur={() =>
            selectFilterHandler(
              filter.buildFilter(
                FilterSelect.Value,
                (valueRef.current && valueRef.current.value) || ""
              )
            )
          }
        />
      </div>
    </div>
  );
}
