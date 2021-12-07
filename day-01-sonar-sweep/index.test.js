import {getNumberMeasurementsIncrease, getSumByThreeMeasurementsIncrease} from ".";

describe("getNumberMeasurementsIncrease", () => {
  test("should return number of measurements increasse of given array of numbers", () => {
    const mockInputData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const result = getNumberMeasurementsIncrease(mockInputData);
    expect(result).toBe(7);
  });
});

describe("getThreeMeasurementsIncrease", () => {
  test("should return an array with number sum grouped by three of given array of numbers", () => {
    const mockInputData = [100, 200, 300, 400, 500];
    const expectedResult = [600, 900, 1200, 900, 500];
    const result = getSumByThreeMeasurementsIncrease(mockInputData);
    expect(result).toMatchObject(expectedResult);
  });
});
