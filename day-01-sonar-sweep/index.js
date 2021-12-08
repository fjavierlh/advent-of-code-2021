export const getNumberMeasurementsIncrease = (input) => {
  let increaseMeasurementCounter = 0;
  input.forEach((measurement, i) => {
    const prevMeasurement = input[i - 1];

    prevMeasurement &&
      measurement > prevMeasurement &&
      increaseMeasurementCounter++;
  });
  return increaseMeasurementCounter;
};

export const getSumByThreeMeasurements = (input) => {
  return input.map((measurement, i) => {
    const nextMeasurement = input[i + 1] || 0;
    const nextToNextMeasurement = input[i + 2] || 0;
    return measurement + nextToNextMeasurement + nextMeasurement;
  });
};

export const getNumberMeasurementsIncreaseByThree = (input) => {
  const transformedInput = getSumByThreeMeasurements(input);
  return getNumberMeasurementsIncrease(transformedInput);
};
