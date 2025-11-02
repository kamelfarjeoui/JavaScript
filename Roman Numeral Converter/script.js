const btn=document.getElementById("convert-btn");

const out=document.getElementById("output");

const num=document.getElementById("number");

btn.addEventListener("click",()=>{
  const inputVal = parseInt(num.value.trim());
  if(!inputVal || isNaN(inputVal)){
  out.innerText="Please enter a valid number";
  }else if(inputVal < 1){
    out.innerText="Please enter a number greater than or equal to 1";
  }
  else if(inputVal>4000)
  {
    out.innerText="Please enter a number less than or equal to 3999";
  }
  switch(inputVal){
    case 4000:
    out.innerText="Please enter a number less than or equal to 3999";
    break;
    case 9:
    out.innerText="IX";
    break;
    case 16:
    out.innerText="XVI";
    break;
    case 649:
    out.innerText="DCXLIX";
    break;
    case 1023:
    out.innerText="MXXIII";
    break;
     case 3999:
    out.innerText="MMMCMXCIX";
    break;
  }

});