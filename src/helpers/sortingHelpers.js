const houses = [
  "Gryffindor",
  "Ravenclaw",
  "Hufflepuff",
  "Slytherin",
];

const audioFiles = {
  stall: [
    "s-ah-yes",
    "s-detect-something-in-you",
    "s-hmm",
    "s-interesting"
  ],
  attributes: [
    "a-alone-when-must",
    "a-ambition",
    "a-brave",
    "a-clever",
    "a-daring",
    "a-dont-give-up",
    "a-loyality",
    "a-power",
    "a-quick-to-learn"
  ],
  decision: [
    "d-better-be",
    "d-perhaps-you-belong-in",
    "d-you-belong-in"
  ],
  house: [ "h-gryffindor", "h-hufflepuff", "h-revenclaw", "h-slytherin" ]
};

export const selectHouse = () => {
  return houses[randomIndex(4)];
}

const randomIndex = (lenght) => {
  return Math.floor(Math.random() * lenght);
}

export const selectAudio = (selectedHouse) => {
  const stall = audioFiles.stall[randomIndex(audioFiles.stall.length)];
  const attribute = audioFiles.attributes[randomIndex(audioFiles.attributes.length)];
  const decision = audioFiles.decision[randomIndex(audioFiles.decision.length)];
  const house = `h-${selectedHouse.toLowerCase()}`;

  const stallPath = `${stall}.mp3`;
  const attributePath = `${attribute}.mp3`;
  const decisionPath = `${decision}.mp3`;
  const housePath = `${house}.mp3`;

  return [
    stallPath,
    attributePath,
    decisionPath,
    housePath
  ]
}
