const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let morseLetters = expr.split(/(.{10})/);
  let decoded = morseLetters.map(letter => {
    if (letter === '') {
      return;
    }
    return letter.replaceAll('00', '').replaceAll('10', '.').replaceAll('11', '-').replaceAll('**********', '\u00A0');
  });
  decoded = decoded.filter(x => x);
  let result = '';
  decoded.forEach(code => {
    result += MORSE_TABLE[code] || ' ';
  });
  return result;
}

module.exports = {
    decode
}