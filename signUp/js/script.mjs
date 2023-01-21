//Sign Up Page
"use strict";

const redirectToPage = (url) => window.location.href = url;

const word = "react";

/*for(let i=0; i<word.length; i++){
    let result = word.substr(i, word.length);
    console.log(word[i].repeat(i)+result)
}*/

word.split("").forEach((w,i) => {
    console.log(w.repeat(i)+word.slice(i))
})

console.log(word.split("").join("*"))

//to make export recognizable, I changed the file's extention to mjs
export{redirectToPage};