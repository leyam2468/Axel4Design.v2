import"./dynamic-import-polyfill.b3685604.js";let e=0,r=0;const c=document.querySelector(".s-user"),s=document.querySelector(".s-comp"),o=document.querySelector(".result"),t=document.querySelectorAll(".choice");document.querySelector("#rock"),document.querySelector("#paper"),document.querySelector("#scissors"),compChoice=()=>["rock","paper","scissors"][Math.floor(3*Math.random())],t.forEach((t=>{t.addEventListener("click",(()=>{const a=compChoice();switch(t.id+":"+a){case"rock:rock":case"paper:paper":case"scissors:scissors":o.style.color="gray",o.innerHTML="Draw";break;case"rock:scissors":case"paper:rock":case"scissors:paper":e++,o.style.color="green",o.innerHTML="WIN",c.innerHTML=e;break;case"rock:paper":case"paper:scissors":case"scissors:rock":r++,o.style.color="red",o.innerHTML="LOSE",s.innerHTML=r}}))}));
