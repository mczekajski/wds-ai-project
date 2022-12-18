const net = new brain.NeuralNetwork();

const data = [
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  {
    input: {
      r: 0.7305364935109546,
      g: 0.1539179418452905,
      b: 0.6585979708378624,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7184385322418283,
      g: 0.5834049629784104,
      b: 0.5597898578269227,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7192517082231129,
      g: 0.5395173716594213,
      b: 0.4754915589090243,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4086020715735903,
      g: 0.763947942617808,
      b: 0.4675715997484715,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8440568950983673,
      g: 0.5019394382135605,
      b: 0.9676006659274761,
    },
    output: [1],
  },
  {
    input: {
      r: 0.2570607913752432,
      g: 0.12237056026406834,
      b: 0.6804238486465661,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9893101808281322,
      g: 0.6861220583500014,
      b: 0.647150274041151,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9154367299417527,
      g: 0.371024854966832,
      b: 0.552558925857126,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6530336684711766,
      g: 0.18965388593741506,
      b: 0.9497619143290719,
    },
    output: [1],
  },
  {
    input: {
      r: 0.08096514226952478,
      g: 0.8080992890869749,
      b: 0.7345883131059607,
    },
    output: [0],
  },
  {
    input: {
      r: 0.3546742387583601,
      g: 0.029414877880953982,
      b: 0.02964262424725561,
    },
    output: [1],
  },
  {
    input: {
      r: 0.16690578063438832,
      g: 0.6435458108672052,
      b: 0.5923391700033587,
    },
    output: [0],
  },
  {
    input: {
      r: 0.19835043040052747,
      g: 0.7980623734930556,
      b: 0.7491734331768152,
    },
    output: [0],
  },
  {
    input: {
      r: 0.994397825133821,
      g: 0.7802726658535164,
      b: 0.2016809035820346,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5156028828939294,
      g: 0.0650647436116123,
      b: 0.7891019998719933,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9305039889285138,
      g: 0.5954272807187382,
      b: 0.6699401695754301,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7407069869554888,
      g: 0.8795376975151699,
      b: 0.6719762015583757,
    },
    output: [0],
  },
  {
    input: {
      r: 0.3242783686947528,
      g: 0.791534448812329,
      b: 0.2498083889128535,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8729576068784426,
      g: 0.31756981544712937,
      b: 0.47574507816953693,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3234087798279157,
      g: 0.7877991062953333,
      b: 0.2690418808351256,
    },
    output: [0],
  },
  {
    input: {
      r: 0.340828520336923,
      g: 0.4792614472963592,
      b: 0.7776698967884408,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5529955850015504,
      g: 0.6899365159257025,
      b: 0.7899914938940129,
    },
    output: [0],
  },
  {
    input: {
      r: 0.04935401212611312,
      g: 0.9212628813858577,
      b: 0.2958912461951997,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7682072393382662,
      g: 0.7466922030757976,
      b: 0.659248688859825,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7123885907870953,
      g: 0.13603618568021125,
      b: 0.5741974145395081,
    },
    output: [1],
  },
];

net.train(data);

const colorEl = document.getElementById("color");
const guessEl = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");

let color;
setRandomColor();

whiteButton.addEventListener("click", () => {
  chooseColor(1);
});

blackButton.addEventListener("click", () => {
  chooseColor(0);
});

printButton.addEventListener("click", print);

function chooseColor(value) {
  data.push({
    input: color,
    output: [value],
  });
  setRandomColor();
}

function print() {
  console.log(JSON.stringify(data));
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  const guess = net.run(color)[0];

  guessEl.style.color = guess > 0.5 ? "#fff" : "#000";
  colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
    color.b * 255
  })`;
}
