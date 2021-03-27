//20. Write a function that generates a string id (specified length) of random characters.
//Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function createId(j) {
let text = "";
let characters_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (var i = 0; i < j; i++) {  
text += characters_list.charAt(Math.floor(Math.random() * characters_list.length)); //.charAt atgriež simbolu, kas ir noteiktā virknes vietā
} return text;
}

console.log(createId(6));  //izveido Id no 6 nejauši izvēlētiem burtiem no dotās virknes