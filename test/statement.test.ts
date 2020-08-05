import { statement } from "../src";
import { customer } from "./customer";
import { movies } from "./movies";

describe("statement", () => {
  it("should create the correct statement", () => {
    const expected = 
`Rental Record for laura
  Die Hard  3.5
  Matrix  2
Amount owed is 5.5
You earned 2 frequent renter points`

    const result = statement(customer, movies);
    expect(result.replace(/\s/g, '')).toEqual(expected.replace(/\s/g, ''));
  });
});
