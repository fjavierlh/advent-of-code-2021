import { getNumberMeasurementsIncrease, getSumByThreeMeasurements } from "./day-01-sonar-sweep/index.js";
import { inputDataDay01 } from "./day-01-sonar-sweep/input.data.js";
import { getHorizontalPositionMultiplyByDepth, getHorizontalPositionMultiplyByDepthAim } from "./day-02-dive/index.js";
import { inputDataDay02 } from "./day-02-dive/input.data.js";
import log from "./logger.js";

log("Advent of code 2021");

log("--- Day 1: Sonar Sweep ---");
const resultDay01Part1 = getNumberMeasurementsIncrease(inputDataDay01);
log(`Result part 1: ${resultDay01Part1}`);
const measurementsByThree = getSumByThreeMeasurements(inputDataDay01);
const resultDay01Part2 = getNumberMeasurementsIncrease(measurementsByThree);
log(`Result part 2: ${resultDay01Part2}`);


log('--- Day 2: Dive! ---');
const resultDay02Part1 = getHorizontalPositionMultiplyByDepth(inputDataDay02);
log(`Result part 1: ${resultDay02Part1}`);
const resultDay02Part2 = getHorizontalPositionMultiplyByDepthAim(inputDataDay02);
log(`Result part 2: ${resultDay02Part2}`);