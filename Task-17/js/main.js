//17. Write a function to  get the number of occurrences of each letter in specified string.

const count = (str) => {
    let freq = {};
    for (let i = 0; i < str.length; i++) { 
      const currentLetter = str.charAt(i);     //charAt will take a specific character of the string and return it as an output. 
      freq[currentLetter] = freq[currentLetter] + 1 || 1;
    }
    return freq;
  }
  console.log(count("dasisteineguteidee"));

 