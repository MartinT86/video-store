import { statement } from "../src";
import { customer } from "./customer";
import { movies } from "./movies";

describe("statement", () => {
  it("should create the correct statement", () => {
    let expected = 'Rental Record for laura\n'
    expected += '\tDie Hard\t3.5\n'
    expected += '\tMatrix\t2\n'
    expected += 'Amount owed is 5.5\n'
    expected += 'You earned 2 frequent renter points\n'

    const result = statement(customer, movies);
    expect(result).toEqual(expected);
  });
});
