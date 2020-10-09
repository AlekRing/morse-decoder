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

function decode(str) {
    let a = ''
    let morse = ''
    let words = ''
    for (let i = 0; i < str.length; i += 10) {
      a = str.substr(i, 10)
      console.log(a)
      if (a === '**********') words += ' '
      else {
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] + a[i+1] === '10') morse += '.'
            else if (a[i] + a[i+1] === '11') {
                morse += '-'
                i++
            }
            else morse += ''
        }
      }
      if (MORSE_TABLE.hasOwnProperty(morse)) console.log(words += MORSE_TABLE[morse])
      morse = ''
    }
    return words
}

module.exports = {
    decode
}