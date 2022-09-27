import { fireEvent, render, screen, within } from "@testing-library/react";
import Sort from "../components/sort";
import SortModule, { SortOrder } from "../models/sortModule";

//Ran out of time to get this mock to work, but ideally, sortModule would be mocked
//so we can isolate testing specifically the sort component's functionality

// jest.mock("../models/sortModule", () => ({
//     ...jest.requireActual('../models/sortModule'),
//     default: () => ({
//       buildSortModule: (a: any, b: any) => {
//         let newSortModule = new MockSortModule();
//         newSortModule.value = b;
//         return newSortModule;
//     }
//     })
// }))

test("sort sets sortOption", () => {
  let sortModule = new SortModule();
  let res: any = -1;

  let sortHandler = (sortModule: SortModule) => {
    res = sortModule.sortOrder;
  };

  render(<Sort sortModule={sortModule} setSortHandler={sortHandler} />);
  fireEvent.mouseDown(screen.getByLabelText("Order"));
  const listbox = within(screen.getByRole("listbox"));

  fireEvent.click(listbox.getByText(/ASC/i));
  expect(res).toEqual(SortOrder.ASC);
});
