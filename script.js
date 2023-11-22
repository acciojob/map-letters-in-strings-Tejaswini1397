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
	  const resultString = '{' + Object.entries(letterMap)
    .map(([key, value]) => `${key}: [${value.join(', ')}]`)
    .join(', ') + '}';

  return resultString;
 }
	  
 alert(mapLetters("dodo"));

	 
	 