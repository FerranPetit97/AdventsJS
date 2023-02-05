function fitsInOneBox(boxes) {
  boxes.forEach((box) => {
    const boxMeasurements = Object.values(box);
    const conditional = box.find((measure) => Object.values(measure));
    console.log(boxMeasurements);
    console.log(measurements);
  });
  return false;
}

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
]); // true

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
]); // false

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
]); // true
