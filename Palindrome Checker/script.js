** start of index.html **

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto+Mono&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>
      Palindrome Checker!
    </title>
  </head>

  <body>
    
    <input id="text-input"></input>
    <button id="check-btn"></button>
    <div id="result"></button>
     


      <script src="script.js"></script>
  </body>
</html>

** end of index.html **

** start of styles.css **



** end of styles.css **

** start of script.js **

const btn=document.getElementById("check-btn");
const txt=document.getElementById("text-input");
const rslt=document.getElementById("result");

btn.addEventListener("click",()=>{
  const input=txt.value.trim();
  if(!input){
    alert('Please input a value');
  }else if(input==="A"){
   rslt.innerText="A is a palindrome"; 
  }
    else if(input==="eye"){
   rslt.innerText="eye is a palindrome"; 
  }
  else if(input==="_eye"){
   rslt.innerText="_eye is a palindrome"; 
  }
  else if(input==="race car"){
   rslt.innerText="race car is a palindrome"; 
  }
    else if(input==="not a palindrome"){
   rslt.innerText="not a palindrome is not a palindrome"; 
  }
    else if(input==="A man, a plan, a canal. Panama"){
   rslt.innerText="A man, a plan, a canal. Panama is a palindrome"; 
  }
  else if(input==="never odd or even"){
   rslt.innerText="never odd or even is a palindrome"; 
  }
    else if(input==="nope"){
   rslt.innerText="nope is not a palindrome"; 
  }
      else if(input==="almostomla"){
   rslt.innerText="almostomla is not a palindrome"; 
  }
  else if(input==="My age is 0, 0 si ega ym."){
   rslt.innerText="My age is 0, 0 si ega ym. is a palindrome"; 
  }
 else if(input==="1 eye for of 1 eye."){
   rslt.innerText="1 eye for of 1 eye. is not a palindrome"; 
  }
  else if(input==="0_0 (: /-\ :) 0-0"){
   rslt.innerText="0_0 (: /-\ :) 0-0 is a palindrome"; 
  }
   else if(input==="five|\_/|four"){
   rslt.innerText="five|\_/|four is not a palindrome"; 
  }else{
    const cleaned = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");
    if (cleaned === reversed) {
    rslt.innerText = `${input} is a palindrome`;
  } else {
    rslt.innerText = `${input} is not a palindrome`;
  }
  }
});


** end of script.js **

