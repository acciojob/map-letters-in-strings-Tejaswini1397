//your JS code here. If required.
 function mapLetters(word) {
  const letterMap = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    // If the letter is not in the map, create an array for it
    if (!letterMap.hasOwnProperty(letter)) {
      letterMap[letter] = [];
    }

    // Push the index to the array
    letterMap[letter].push(i);
	 
  }
	 const resultString = JSON.stringify(letterMap)
    .replace(/"/g, '') // remove double quotes around keys
    .replace(/:/g, ': ') // add space after colon

  return resultString
 }
	 alert(mapLetters('dodo'));

	 
	 