let con = document.querySelectorAll(".con");
// console.log(con)
let computer = document.querySelectorAll(".computer")
console.log(computer)
let triangle = document.querySelector(".triangle")
let user = document.querySelector(".user");
let machine = document.querySelector(".machine");
let winModal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner")
let play = document.querySelector(".play");
let userScoreP= document.querySelector("#user-scorep")
let compScoreP= document.querySelector("#comp-scorep")
let rulebtn = document.querySelector(".rulebtn");
let next = document.querySelector(".next");
let nextpage = document.querySelector(".nextpage");
let pa = document.querySelector('.pa');
console.log(rulebtn)
console.log(userScoreP.innerText)
console.log(compScoreP.innerText)
let score = JSON.parse(localStorage.getItem("sc"));
let compscore = JSON.parse(localStorage.getItem("cs"));
if(score){
    userScoreP.innerText=score;

}
if(compscore){
    compScoreP.innerText=compscore;
}
let userpoint =0;
let comppoint =0;

let random = Math.floor(Math.random()*3);
con.forEach((element,index) => {
    element.addEventListener("click",()=>{
        user.style.opacity="1"
        triangle.style.display="none";
        con.forEach(item => {
            item.style.display="none";
            
        });
        element.style.display="block"
        element.classList.add("show")
        setTimeout(() => {
            
            machine.style.opacity="1";
            setTimeout(() => {
                computer[random].style.display='block';
            computer[random].classList.add("right");
            }, 1000);
            setTimeout(() => {
                if(random==index){
                    winModal.style.display="grid";
                    winner.innerText ="Match Draw"
                    rule

                }else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
                    userpoint=score;
                    userpoint++;
                    userScoreP.innerText=userpoint;
                    localStorage.setItem("sc",JSON.stringify(userpoint));
                    rulebtn.style.marginRight = "85px";
                    next.style.visibility="visible";
                    winModal.style.display="grid";
                    winner.innerText ="You Win"
                }else{
                    comppoint=compscore;
                    comppoint++;
                    compScoreP.innerText=comppoint;
                    localStorage.setItem("cs",JSON.stringify(comppoint));
                    winModal.style.display="grid";
                    winner.innerText ="You Loose "

                }
            }, 1500);

        }, 500);
    })
    
});
play.addEventListener("click",()=>{
    window.location.reload();
})


msgrule = document.querySelector(".msgrule");
console.log(msgrule)
rule = document.querySelector(".rulebtn");
console.log(rule);
cross =  document.querySelector(".cross");
cross.addEventListener("click",()=>{
    msgrule.style.visibility="hidden";
    cross.style.visibility="hidden";
    
    
})
rule.addEventListener("click",()=>{
    msgrule.style.visibility="visible";
    cross.style.visibility="visible";
})

next.addEventListener('click',()=>{
    nextpage.style.visibility="visible";
    pa.style.visibility="visible";
    cross.style.visibility="hidden";


})
pa.addEventListener('click',()=>{
    window.location.reload();

})