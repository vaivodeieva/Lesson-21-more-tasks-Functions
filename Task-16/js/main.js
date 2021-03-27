//16. Write a function to extract unique characters from a string.
//Example string : "thequickbrownfoxjumpsoverthelazydog"
//Expected Output : "thequickbrownfxjmpsvlazydg"


function unique(str1) {
 let str = str1;
 let uniqLetters = "";
 for (let i = 0; i < str.length; i++) {

 if (uniqLetters.indexOf(str.charAt(i))==-1) {  //The indexOf() returns the index of the first occurrence of a 
                                                // substring in a string, or -1 if the string does not contain the substring.
  uniqLetters += str[i];                        //The charAt() method returns the character at the specified index in a string. The index  
                                                //of the first character is 0, the second character is 1, and so on.
   }
  }
  return uniqLetters;  
}  
console.log(unique("rudensziemapavasarisvasara"));