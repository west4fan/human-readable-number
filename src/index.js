module.exports = function toReadable (number) {
  let valueNumber = number,
      numeral = valueNumber % 10;

  valueNumber = (valueNumber - numeral) / 10;

  let tens = valueNumber % 10;

  valueNumber = (valueNumber - tens) / 10;

  let hundred = valueNumber % 10;

  valueNumber = (valueNumber - hundred) / 10;

  let numeralArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      teensArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      tensArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let hundredText;
  if (hundred !== 0) {
    hundredText = `${numeralArr[hundred]} hundred`;
  } else {
    hundredText = '';
  }

  let tensText;
  if (tens === 1) {
    tensText = teensArr[numeral];
  } else if (tens !== 0 && tens !== 1) {
    tensText = tensArr[tens];
  } else if (tens === 0) {
    tensText = '';
  }

  let numeralText;
  if (tens === 1 || (hundred !== 0 || tens !== 0) && numeral === 0) {
    numeralText = '';
  } else if ((hundred !== 0 || tens !== 0 && tens !== 1) && numeral !== 0 || (hundred == 0 || tens == 0) && (numeral === 0 || numeral !== 0)) {
    numeralText = numeralArr[numeral];
  }

  let resultArr = [hundredText, tensText, numeralText];
  return resultArr.filter(Element => Element !== '').join(' ');
}
