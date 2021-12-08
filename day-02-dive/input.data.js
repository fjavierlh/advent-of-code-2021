import * as fs from "fs";

const inputRawData = fs.readFileSync("./day-02-dive/input.txt", "utf8");
export const inputDataDay02 = inputRawData.split(/\n/).map((command) => {
    const [order, units] = command.split(' ');
    return [order, +units];
});
