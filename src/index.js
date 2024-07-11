// Your code here
let character=null;
const div=document.getElementById("character-bar")

fetch("http://localhost:3000/characters")
.then((res)=>res.json())
.then((data)=>data.forEach(element => {
    const span=document.createElement("span")
    span.textContent=element.name
    div.appendChild(span)

    span.addEventListener("click", ()=>{
        fetch(`http://localhost:3000/characters/${element.id}`)
        .then((res)=>res.json())
        .then((data)=>{
          const p=document.querySelector("#name")
          p.textContent=data.name;

          const img=document.querySelector("#image")
          img.src=data.image;

          const h4=document.querySelector("#vote-count")
          h4.textContent=data.votes;

          character = element;

        })})}))

        const vote=document.getElementById("votes-form")
        const input=document.getElementById("votes")
        vote.addEventListener("submit", function(e){
        e.preventDefault()
        if (character){
        character.votes += Number(input.value)
        const h4=document.querySelector("#vote-count")
        h4.textContent=character.votes;
        input.value=''
        console.log(character.votes)
        }

})
const reset=document.querySelector("#reset-btn")
reset.addEventListener("click", function(){
  if (character){
    character.votes=0;
    const h4=document.querySelector("#vote-count")
    h4.textContent=character.votes;
    input.value=''
  
    }
})