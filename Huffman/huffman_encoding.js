class HuffmanNode {
  constructor(char, freq) {
    this.char = char;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}

function buildHuffmanTree(text) {
  const freqMap = new Map();

  for (const char of text) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  const nodes = [];
  for (const [char, freq] of freqMap.entries()) {
    nodes.push(new HuffmanNode(char, freq));
  }

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);

    const left = nodes.shift();
    const right = nodes.shift();

    const merged = new HuffmanNode(null, left.freq + right.freq);
    merged.left = left;
    merged.right = right;

    nodes.push(merged);
  }

  return nodes[0];
}

function buildCodes(node, prefix = "", codeMap = {}) {
  if (!node) return;

  if (node.char !== null) {
    codeMap[node.char] = prefix;
  }

  buildCodes(node.left, prefix + "0", codeMap);
  buildCodes(node.right, prefix + "1", codeMap);

  return codeMap;
}

function huffmanEncode(text) {
  const root = buildHuffmanTree(text);
  const codeMap = buildCodes(root);

  let encodedString = "";
  for (const char of text) {
    encodedString += codeMap[char];
  }

  console.log(Object.keys(codeMap).length, encodedString.length);

  for (const [char, code] of Object.entries(codeMap)) {
    console.log(`'${char}': ${code}`);
  }

  console.log(encodedString);
  return { codeMap, encodedString };
}

huffmanEncode("Errare humanum est.");
