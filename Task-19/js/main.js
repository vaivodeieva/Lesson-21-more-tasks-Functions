//19. Write a function that returns array elements larger than a number.
//Jeb uzraksti funkciju, kas atgriež virknes elementus, kas ir lielāki nekā dotais skaitlis.

function BiggerElements(value) {

     return function(lgValue) {  //te ir funkcija funkcijā; atgriezt vienas f-jas vērtību tikai tad, ja..

     return (lgValue > value);   // ..ja otrās funkcijas vērtība ir lielāka par iepr. f-jas vērtību
     }
   }
let result = [12, 198, 1, 7, 33, 17, 77].filter(BiggerElements(17));

console.log(result);


