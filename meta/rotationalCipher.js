/**
 * One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount.
 * Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or
 * numerical order. For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?".
 * Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric
 * character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters
 * remain unchanged. Given a string and a rotation factor, return an encrypted string.
 */

// helpers
const rotateUpperChar = (char, factor) => {
  const base = "A".charCodeAt();
  return String.fromCharCode(((char.charCodeAt() - base + factor) % 26) + base);
};

const rotateLowerChar = (char, factor) => {
  const base = "a".charCodeAt();
  return String.fromCharCode(((char.charCodeAt() - base + factor) % 26) + base);
};

const rotateNum = (char, factor) => {
  const base = "0".charCodeAt();
  return String.fromCharCode(((char.charCodeAt() - base + factor) % 10) + base);
};

// main
const rotationalCipher = (input, rotationFactor) => {
  let out = "";
  for (let char of input) {
    if (char.match(/[a-z]/)) {
      out += rotateLowerChar(char, rotationFactor);
    } else if (char.match(/[A-Z]/)) {
      out += rotateUpperChar(char, rotationFactor);
    } else if (char.match(/[0-9]/)) {
      out += rotateNum(char, rotationFactor);
    } else {
      out += char;
    }
  }
  return out;
};

// tests
const input1 = "All-convoYs-9-be:Alert1.";
const rotationFactor1 = 4;
const expected1 = "Epp-gsrzsCw-3-fi:Epivx5.";
const output1 = rotationalCipher(input1, rotationFactor1);
console.log(expected1, output1);

const input2 = "abcdZXYzxy-999.@";
const rotationFactor2 = 200;
const expected2 = "stuvRPQrpq-999.@";
const output2 = rotationalCipher(input2, rotationFactor2);
console.log(expected2, output2);
