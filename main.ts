function RNG(min: number, max: number) {
  const rng = Math.random();

  // rng * (max - min) + min)
  // rng = 0 => min
  // rng = 1 => max

  return Math.trunc(rng * (max - min) + min);
}

function RNGDec(min: number, max: number, precision: number) {
  if (!Number.isInteger(precision)) {
    throw new Error('Error "precision must be an Integer"');
  }

  const rng = Math.random();
  let risultato = rng * (max - min) + min;

  return risultato.toFixed(precision);
}

function RNGSequence(len: number, min: number, max: number) {
  if (len > max - -min) {
    console.error(
      "cannon find " + len + " numbers between " + min + " and " + max
    );
    return;
  }
  const res: number[] = [];

  while (res.length < len) {
    const rn = RNG(min, max);
    // con il comando .includes si va a controllare se rn è gia presente nell'array res[].
    if (res.includes(rn)) {
      continue;
    }
    res.push(rn);
  }

  return res;
}

const ruote = [
  "Bari",
  "Cagliari",
  "Firenze",
  "Genova",
  "Milano",
  "Napoli",
  "Palermo",
  "Roma",
  "Torino",
  "Venezia",
  "Nazionale",
];

const estrazioni: { [ruota: string]: number[] } = {};

for (const ruota of ruote) {
  const estrazione = RNGSequence(5, 1, 91);
  estrazioni[ruota] = estrazione;
}

function createRuotaCnt(ruotaName: string, estrazioni: number[]) {
  const ruotaDiv = document.createElement("div");
  ruotaDiv.className = "ruota " + ruotaName.toLowerCase();
  const nameH2 = document.createElement("h2");
  nameH2.className = "ruota-title";
  nameH2.innerText = ruotaName;
  ruotaDiv.appendChild(nameH2);

  for (const num of estrazioni) {
    const numP = document.createElement("p");
    numP.innerText = "" + num;
    const numDiv = document.createElement("div");
    numDiv.className = "ruota-estrazione";
    numDiv.appendChild(namP);
    ruotaDiv.appendChild(numDiv);
  }

  return ruotaDiv;
}

const container = document.getElementById("cnt");

if (container) {
  const pre = document.createElement("pre");

  for (const ruota of ruote) {
    const ruotaEstrazioni = estrazioni[ruota];
    const ruotaDiv = createRuotaCnt(ruota, ruotaEstrazioni);
    container.appendChild(ruotaDiv);
  }
}
