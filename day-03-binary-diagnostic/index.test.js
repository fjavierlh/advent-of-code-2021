import { getSubmarinePowerConsumption } from ".";

describe("getSubmarinePowerConsumption", () => {
  const mockInput = [
    "00100", "11110", "10110", "10111", "10101", "01111", "00111", "11100", "10000", "11001", "00010",
    "01010",
  ];
  test("should return the power consumption of the submarine ", () => {
    const expectedResult = 198;
    const result = getSubmarinePowerConsumption(mockInput);
    expect(result).toBe(expectedResult);
  });
});

describe("getSubmarineLifeSupportRating", () => {
  const mockInput = [
    "00100", "11110", "10110", "10111", "10101", "01111", "00111", "11100", "10000", "11001", "00010",
    "01010",
  ];
  test("should return the power consumption of the submarine ", () => {
    const expectedResult = 230;
    const result = getSubmarinePowerConsumption(mockInput);
    expect(result).toBe(expectedResult);
  });
});

