// #6
//  function go(){
//     var elements = document.getElementsByTagName('a');
//     for (var i = 0; i < elements.length; i++){
//         elements[i].innerHTML = elements[i].innerHTML+' ('+elements[i].getAttribute('href')+')';
//     }
// }

// №5
// let ol = document.getElementById('parent'); 
// let li = document.createElement('li'); 
// li.innerHTML = 'land'; 
// ol.appendChild(li);

// №8
// clicker
//   let h1Id = document.getElementById('h1'); taked id from h1 and button
//   let buttonId = document.getElementById('button'); 
//   let counter = 0; 
//   buttonId.addEventListener('click',function(){  maked function for  count
//       counter++; 
//       h1Id.textContent = 'сделано кликов: '+counter; 
//   });

// №1
// function loadingXl(){
//     window.timeShower = window.setInterval(buttonClickZl, 3000);
// }
// function buttonClickZl(){
//     window.scrollTo(0, 500);
// }

// #9
// Element.closest()//род
// var ul = document.getElementById("ul");
// ul.addEventListener("click", function func(event) {
// 	var li = event.target.closest("li");
// 	if (li) {//если li есть
// 		li.innerHTML +="!"; //добавляем ! li
// 	}
// });
// var btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click", function() {
// var liElem = document.createElement("li");
// liElem.innerHTML = "текст";
// ul.appendChild(liElem);
// });

// №3
// let btn = document.getElementById('button');
// btn.addEventListener('click', function (event) {
// event.preventDefault();
// let form = document.getElementsByTagName('input');
// let sum = 0;
//    for (let i = 0; i < form.length; i++ ){ 
//         sum += Number(form[i].value) 
//     } 
// alert(sum)
// });

// #7
// document.querySelectorAll('p').forEach(p => {
//     p.onclick = () => (p.innerText = Math.pow(+p.innerText, 2));
//   })

// 2.2
// let btn = document.getElementsByTagName("btn")[0];
// btn.addEventListener("click",ramber);
// function ramber() {
// if ((window.innerWidth - document.documentElement.clientWidth) > 0) {
// 			alert("Имеется");
// 		} else {
// 			alert('Отсутствует');
// 		}
// }
// #10
// let table = document.querySelector("table");
// let names = document.querySelector(".name");
// let surname = document.querySelector(".surname");
// let btn = document.querySelector("button");
// table.onclick = function(event){
//     let target = event.target;
//         if(target.tagName != 'TD') return;
//         if(target.tagName == 'TD') {
//             target.innerText = prompt("Изменить",target.innerText);
//         }
//     }
// btn.onclick = function() {
//     let tr = document.createElement("tr");
//     if(names.value != "" && surname.value != "") {
//         tr.innerHTML = `<td>${names.value}</td><td>${surname.value}</td>`;
//         table.appendChild(tr);
//     }
// }
