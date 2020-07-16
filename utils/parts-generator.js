
//tolerance for each type of control
const tolerances = {
  X: 0.3,
  Y: 0.3,
  Z: 0.3,
  Diameter: 0.4,
  Length: 0.2,
};
// static base for the parts
const partsBase = [
  {
    name: "Part A",
    features: [
      {
        name: "Seam",
        controls: [
          "X",
          "Y",
          "Z",
          "Length",
          "X",
          "Y",
          "Z",
          "Length",
          "X",
          "Y",
          "Z",
          "Length",
          "X",
          "Y",
          "Z",
          "Length",
          "X",
          "Y",
          "Z",
          "Length",
          "X",
          "Y",
          "Z",
          "Length",
        ],
      },
      { name: "Slot", controls: ["X", "Y", "Z", "Diameter"] },
      { name: "Hole", controls: ["X", "Y", "Z", "Diameter"] },
      {
        name: "Hole 2",
        controls: [
          "X",
          "Y",
          "Z",
          "Diameter",
          "X",
          "Y",
          "Z",
          "Diameter",
          "X",
          "Y",
          "Z",
          "Diameter",
        ],
      },
      { name: "Hole 3", controls: ["X", "Y", "Z", "Diameter"] },
      { name: "Hole 4", controls: ["X", "Y", "Z", "Diameter"] },
    ],
  },
  {
    name: "Part B",
    features: [
      {
        name: "Seam",
        controls: [
          "X",
          "Y",
          "Z",
          "Length",
          "X",
          "Y",
          "Z",
          "Length",
          "X",
          "Y",
          "Z",
          "Length",
          "X",
          "Y",
          "Z",
          "Length",
          "X",
          "Y",
          "Z",
          "Length",
          "X",
          "Y",
          "Z",
          "Length",
        ],
      },
      { name: "Slot", controls: ["X", "Y", "Z", "Diameter"] },
      { name: "Hole 1", controls: ["X", "Y", "Z", "Diameter"] },
    ],
  },
];

const generateParts = () => {
  return partsBase.map((part) => ({
    ...part,
    features: part.features.map((feature) => ({
      ...feature,
      controls: feature.controls.map((name) => {
        let control = { name: name };
        control.dev = parseInt(Math.random() * 30) / 100;
        control.devTol = Math.max(0, control.dev - tolerances[name]);
        //Since I couldn't figure out when the yellow/warning status should be triggered I arbitrarily set it to deviation being higher than half the tolerance and error when it's higher
        control.status =
          control.devTol > 0
            ? "error"
            : control.dev > tolerances[name] / 2
            ? "warning"
            : "ok";
        return {
          ...control,
          dev: control.dev.toFixed(2),
          devTol: control.devTol.toFixed(2),
        };
      }),
    })),
  }));
};

module.exports=generateParts;
