export enum FilterEntity {
  Country,
  Continent,
  Language,
}

export interface FilterField {
  name: string;
  field: string;
  entity: FilterEntity;
}

export const FilterFields: FilterField[] = [
  {
    name: "Country Code",
    field: "code",
    entity: FilterEntity.Country,
  },
  {
    name: "Currency",
    field: "currency",
    entity: FilterEntity.Country,
  },
  {
    name: "Continent Name",
    field: "continent",
    entity: FilterEntity.Country,
  },
];

export interface FilterOperator {
  name: string;
  field: string;
}

export const FilterOperators = [
  { name: "equals", field: "eq" },
  { name: "does not equal", field: "ne" },
  { name: "in", field: "in" },
  { name: "not in", field: "nin" },
  { name: "matches regex", field: "regex" },
  { name: "????", field: "glob" },
];

export enum FilterSelect {
  Field,
  Operator,
  Value,
}

export default class FilterRequest {
  field: FilterField | null;
  operator: FilterOperator | null;
  value: string;

  constructor() {
    this.field = null;
    this.operator = null;
    this.value = "";
  }

  buildFilter(updateField: FilterSelect, value: any): FilterRequest {
    let newFilter = new FilterRequest();
    switch (updateField) {
      case FilterSelect.Field:
        newFilter.field = FilterFields[value];
        newFilter.operator = this.operator;
        newFilter.value = this.value;
        break;
      case FilterSelect.Operator:
        newFilter.field = this.field;
        newFilter.operator = FilterOperators[value];
        newFilter.value = this.value;
        break;
      case FilterSelect.Value:
        newFilter.field = this.field;
        newFilter.operator = this.operator;
        newFilter.value = value;
        break;
    }

    return newFilter;
  }

  buildGqlString() {
    let filter = `{}`;
    if (this.validFilter()) {
      filter = `
        {
            ${this.field?.field}: {
                ${this.operator?.field}: "${this.value}"
            }
        }
    `;
    }
    return filter;
  }

  validFilter() {
    return (
      this.field &&
      this.field.field &&
      this.operator &&
      this.operator.field &&
      this.value
    );
  }
}
