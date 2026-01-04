import countries from "./app.js";
import updateUi from "./data.js";

let inputEl = document.querySelector(".input");
let regionEl = document.querySelector("#region");


inputEl.addEventListener("input", (e) => {
 

  let inputValue = e.target.value.trim();
  let filterArr = countries.filter((item) => {
   
    return item.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  updateUi(filterArr);
});


regionEl.addEventListener("change",(e)=>{
  let result=e.target.value

  let filterArr=countries.filter(
    (item)=>item.region.toLocaleLowerCase()==result.toLocaleLowerCase()
  )
  updateUi(filterArr)
})