import { getHorizontalPositionMultiplyByDepth, getHorizontalPositionMultiplyByDepthAim } from ".";

describe("getHorizontalPositionMultiplyByDepth", () => {
  const mockInput = [
    ["forward", 5],
    ["down", 5],
    ["forward", 8],
    ["up", 3],
    ["down", 8],
    ["forward", 2],
  ];
  test("should return 150 given mock array of", () => {
      const expectedResult = 150;
      const result = getHorizontalPositionMultiplyByDepth(mockInput);
      expect(result).toBe(expectedResult);
  });
});

describe("getHorizontalPositionMultiplyByDepthComplex", () => {
  const mockInput = [
    ["forward", 5],
    ["down", 5],
    ["forward", 8],
    ["up", 3],
    ["down", 8],
    ["forward", 2],
  ];
  test("should return 900 given mock array of", () => {
      const expectedResult = 900;
      const result = getHorizontalPositionMultiplyByDepthAim(mockInput);
      expect(result).toBe(expectedResult);
  });
});