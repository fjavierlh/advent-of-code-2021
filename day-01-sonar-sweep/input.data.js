import * as fs from "fs";

const inputRawData = fs.readFileSync("./day-01-sonar-sweep/input.txt", "utf8");
export const inputDataDay01 = inputRawData.split(/\n/).map((m) => +m);
