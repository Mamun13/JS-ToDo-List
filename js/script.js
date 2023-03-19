// const inputfield = document.getElementById('inputfield');
// const inputsubmit = document.getElementById('inputsubmit');
// const Display = document.getElementById('display');

// inputsubmit.addEventListener("click", (e)=>{
//   e.preventDefault()
//     const list = document.createElement('li');
//     list.classList.add('list-style')
//     list.innerText = inputfield.value;
//     Display.appendChild(list);
//     inputfield.value = "";
//     list.addEventListener("click", ()=>{
//       list.style.textDecoration = 'line-through';
//     })
//     list.addEventListener("dblclick", ()=>{
//       Display.removeChild(list);
//     })
// })

//

// const show = document.getElementById("value");
// const text = document.getElementsByClassName(".demo");

// function change(){
//   let value = document.getElementById('count').value;
//     show.innerHTML= value;
//   if(value == 6){
//     console.log('hey')
//   }else{
//     console.log('hi ')

//   }
// }

// <!-- namta range -->

const X = document.getElementById("submit-btn");
const Y = document.getElementById("reset-btn"); 

X.addEventListener("click" , (e)=>{
  e.preventDefault();
  let text = "";
  const value = document.getElementById("inputform").value;
  console.log(value);
  for (let i = 1; i <= 10; i++) {
    let b = value * i
    text += value + " * " + i + " = " + b +"<br>";
  }
  document.getElementById("demo").innerHTML = text;
})


// reset form data 

// Y.addEventListener("click", (e)=>{
//   e.preventDefault();
//   document.getElementById("reset").reset();  
//   document.getElementById("demo").innerText.reset();  
//   // alert("something went wrong");
// })