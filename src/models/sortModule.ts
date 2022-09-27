export enum SortOrder {
    ASC = 1,
    DESC = 2
}

export const SortOptions = [
    {name: "Country Code", field: "code"},
    {name: "Country Name", field: "name"},
    {name: "Continent Name", field: "continent.name"},
    {name: "Currency", field: "currency"}
]

export interface SortOption {
    name: String;
    field: String;
}

export default class SortModule {
    sortOption: SortOption | undefined;
    sortOrder: SortOrder | undefined;

    constructor() {
        this.sortOption = undefined;
        this.sortOrder = undefined;
    }

    buildSortModule(selector: string, value: any) {
        const newSortModule = new SortModule;
        newSortModule.sortOption = this.sortOption;
        newSortModule.sortOrder = this.sortOrder;

        newSortModule[selector as keyof SortModule] = value;
        return newSortModule;
    }

    isValid() {
        return this.sortOption && this.sortOrder;
    }
}