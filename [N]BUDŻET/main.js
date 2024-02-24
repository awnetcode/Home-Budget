const names = ["Jedzenie","Transport","Rachunki","Dzieci","Zdrowie","Hobby","Rozrywka","Pozostałe"];

let total = [0,0,0,0,0,0,0,0];

const exp = document.querySelector(".expend");
const cards = document.querySelectorAll(".card");
const card1 = document.querySelector(".card:nth-child(1)");
const card2 = document.querySelector(".card:nth-child(2)");
const card3 = document.querySelector(".card:nth-child(3)");
const card4 = document.querySelector(".card:nth-child(4)");
const content = document.querySelector(".content");
const dateSlot = document.querySelector(".date");

function setTime(){
    const date = new Date();
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth();
    const months = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];

    dateSlot.innerHTML = day+'&nbsp;'+months[month]+'&nbsp;'+year;
}

setTime();


//przełączanie między kartami aplikacji
/*
cards.forEach(cardActive);

function cardActive(card, i, arr){
     arr[i]= card.addEventListener('click', ()=>{
        card.classList.toggle("active");
     })
}
*/
//tworzenie w html wierszy kategorii wydatków 
function drawCathegories(){
    for(i=0;i<=names.length-1;i++){
        const form='<form class="cat-form" action="calc.php" method="POST"><input type="number" name="cat[]" value="" class="num">';
        let row = document.createElement('li')
        exp.appendChild(row);
        row.innerHTML='<img class="exp_image" src="picture/'+(i+1)+'.jpg"><h1>'+names[i]+'</h1>'+form+'<div class="sum">'+total[i]+'&nbsp;PLN</div>' 
    }
    card1.classList.add("active");
}

card1.addEventListener("click", drawExpend);

function drawExpend(){
    window.location.reload();
    card1.classList.add("active");   
}

//tworzenie karty podsumowanie
card2.addEventListener("click", drawSummmary);
function drawSummmary(){

    /*
    const tableHeader = '<table border = "2" cellpadding = "10" cellspacing = "4"><tr class="table-row"><td class="table-cell">Kategoria</td><td class="table-cell">Ten miesiąc</td><td class="table-cell">Ubiegły miesiąc</td><td class="table-cell">Średnio</td></tr>';
    function tableBody() {
        names.forEach(nam => {
            
        });

    }
    tableBody();
        */
    const table = '<table border = "2" cellpadding = "10" cellspacing = "4"><tr class="table-row"><td class="table-cell">Kategoria</td><td class="table-cell">Ten miesiąc</td><td class="table-cell">Ubiegły miesiąc</td><td class="table-cell">Średnio</td></tr><tr class="table-row"><td class="table-cell">Jedzenie</td><td class="table-cell"></td><td class="table-cell"></td><td class="table-cell"></td></tr><tr class="table-row"><td class="table-cell">Transport</td><td class="table-cell"></td><td class="table-cell"></td><td class="table-cell"></td></tr><tr class="table-row"><td class="table-cell">Rachunki</td><td class="table-cell"></td><td class="table-cell"></td><td class="table-cell"></td></tr><tr class="table-row"><td class="table-cell">Dzieci</td><td class="table-cell"></td><td class="table-cell"></td><td class="table-cell"></td></tr><tr class="table-row"><td class="table-cell">Zdrowie</td><td class="table-cell"></td><td class="table-cell"></td><td class="table-cell"></td></tr><tr class="table-row"><td class="table-cell">Hobby</td><td class="table-cell"></td><td class="table-cell"></td><td class="table-cell"></td></tr><tr class="table-row"><td class="table-cell">Rozrywka</td><td class="table-cell"></td><td class="table-cell"></td><td class="table-cell"></td></tr><tr class="table-row"><td class="table-cell">Pozostałe</td><td class="table-cell"></td><td class="table-cell"></td><td class="table-cell"></td></tr></table>';

    content.innerHTML = table;

cards.forEach((card) => {
    card.classList.remove("active");
})

    card2.classList.add("active");
}

//tworzenie karty wykresy
card3.addEventListener("click", drawCharts);
function drawCharts(){
    const canvasContent = '<canvas id="myCanvas" width="600" height="400"></canvas>';
    content.innerHTML = canvasContent;
    cards.forEach((card) => {
        card.classList.remove("active");
    });
    card3.classList.add("active");
}

//tworzenie karty analiza
card4.addEventListener("click", drawAnalysis);
function drawAnalysis(){
    content.innerHTML = "BOMBA TYKA";
    cards.forEach((card) => {
        card.classList.remove("active");
    });
    card4.classList.add("active");
}

