const notesContainer=document.querySelector(".notesContainer");
const button=document.querySelector(".btn");
let notes=document.querySelectorAll(".inputBox");
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
button.addEventListener("click",()=>{
    let input=document.createElement("p")
    let img=document.createElement("img");
    input.className="inputBox";
    input.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(input).appendChild(img);
});
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".inputBox");
        notes.forEach(notes=>{
            notes.onkeyup=function(){
                updateStorage();
            }
        })
    }

})