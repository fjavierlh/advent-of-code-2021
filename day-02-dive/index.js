export const getHorizontalPositionMultiplyByDepth = (input) => {
  let horizontalPosition = 0;
  let depth = 0;
  const actions = {
    forward: (val) => (horizontalPosition += val),
    down: (val) => (depth += val),
    up: (val) => (depth -= val),
  };
  input.forEach((command) => {
    const [order, value] = command;
    actions[order](value);
  });
  return horizontalPosition * depth;
};

export const getHorizontalPositionMultiplyByDepthAim = (input) => {
  let aim = 0;
  let horizontalPosition = 0;
  let depth = 0;
  const actions = {
    forward: (val) => {
      horizontalPosition += val;
      depth += val * aim;
    },
    down: (val) => (aim += val),
    up: (val) => (aim -= val),
  };
  input.forEach((command) => {
    const [order, value] = command;
    actions[order](value);
  });
  return horizontalPosition * depth;
};
