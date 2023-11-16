const farmAnimals = 'cow horse sheep pig chicken';
const farmAnimalsArray = farmAnimals.split(' ');
const [moo, neigh, baa, oink, cluck] = farmAnimalsArray;
const traditionalAnimalNamesArray = [moo, neigh, baa, oink, cluck];
const [bessie, dolly, babe, little] = traditionalAnimalNamesArray;
const Animalcolors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};
const { blackAndWhite, black, pink } = Animalcolors;


const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const [red, orange, yellow, green, blue, indigo, violet] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const [r, o, y, g, b, v, indg] = ["red", "orange", "yellow", "green", "blue", "violet", "indigo"];


const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const { muppetName, color, song, job, partner } = muppet;

const {
  nestedName,
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;
// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner