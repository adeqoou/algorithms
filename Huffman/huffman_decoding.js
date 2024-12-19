function huffmanDecode() {
  const input = [
    "12 60",
    "' ': 1011",
    "'.': 1110",
    "'D': 1000",
    "'c': 000",
    "'d': 001",
    "'e': 1001",
    "'i': 010",
    "'m': 1100",
    "'n': 1010",
    "'o': 1111",
    "'s': 011",
    "'u': 1101",
    "100011110001001101000111111011001010011000010110011010111110",
  ];

  const [uniqueCount, encodedLength] = input[0].split(" ").map(Number);

  const codeMap = {};
  for (let i = 1; i <= uniqueCount; i++) {
    const [symbol, code] = input[i]
      .split(":")
      .map((str) => str.trim().replace(/'/g, ""));
    codeMap[code] = symbol;
  }

  const encodedString = input[uniqueCount + 1];

  let decodedString = "";
  let currentCode = "";
  for (let i = 0; i < encodedString.length; i++) {
    currentCode += encodedString[i];
    if (currentCode in codeMap) {
      decodedString += codeMap[currentCode];
      currentCode = "";
    }
  }

  console.log(decodedString);
}

huffmanDecode();
