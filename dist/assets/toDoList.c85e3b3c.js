import"./dynamic-import-polyfill.b3685604.js";const t=document.querySelector(".todo-input"),e=document.querySelector(".todo-submit"),n=document.querySelector(".todo-list");e.addEventListener("click",(function(e){if(e.preventDefault(),""!==t.value){let e=`\n        <li class="todo-text">${t.value}</li>\n        <div>\n            <button class="todo-check">\n                <i class="fas fa-check"></i>\n            </button>\n            <button class="todo-trash">\n                <i class="fas fa-trash"></i>\n            </button>\n        </div>`,n=document.createElement("div");n.classList.add("todo-item"),n.innerHTML=e,document.querySelector(".todo-list").appendChild(n)}t.value="",t.focus()})),n.addEventListener("click",(function(t){const e=t.target;if("todo-trash"===e.classList[0]){const t=e.parentElement.parentElement;t.style.animation="fall .8s ease",t.addEventListener("animationend",(function(){t.remove()}))}if("todo-check"===e.classList[0]){e.parentElement.parentElement.classList.toggle("completed")}}));