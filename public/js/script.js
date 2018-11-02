// Drum Arrays
const sixteen = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let kicks = sixteen;
let snares = sixteen;
let hiHats = sixteen;
let rideCymbals = sixteen;

const toggleDrum = (arrayName, indexNum) => {
  arrayName[indexNum] = !arrayName[indexNum];
};

const clear = arrayName => arrayName = sixteen;

const invert = (arrayName) => {
  return arrayName = arrayName.map(function(index) {
    return !index;
  });
};