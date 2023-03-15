const inputfield = document.getElementById('inputfield');
const inputsubmit = document.getElementById('inputsubmit');
const Display = document.getElementById('display');

inputsubmit.addEventListener("click", (e)=>{
  e.preventDefault()
    const list = document.createElement('li');
    list.classList.add('list-style')
    list.innerText = inputfield.value;
    Display.appendChild(list);
    inputfield.value = "";
    list.addEventListener("click", ()=>{
      list.style.textDecoration = 'line-through';
    })
    list.addEventListener("dblclick", ()=>{
      Display.removeChild(list);
    })
})