let buttonFinds = document.querySelectorAll(".btn");
let addTable = document.getElementById("addSeat");
let diplayCont = document.getElementById("countSeat");
let ticketCount = document.getElementById("ticketCount");
let totalPrice = document.getElementById("totalPrice");
let grandTotal = document.getElementById("grandTotal");
let cuponCode = document.getElementsByClassName("cupons");
let purchasebtn = document.getElementById("purchase");
let name = document.getElementById("pachanger_name");
let phone = document.getElementById("pachangerNamephone");
let email = document.getElementById("customerEmail");

let priceTotal = 0;
let seatCount = 0;

for (let i = 0; i <= buttonFinds.length; i++) {
    buttonFinds[i].addEventListener("click", function (e) {
        if (seatCount >= 6) {
            alert("You Can Not Bye Any More Ticket")
        } else {
            let text = e.srcElement.innerText;
            tableAdd(text);
            buttonFindById(text);
            selectVerify(text)
        }
    });
}



function tableAdd(text) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td.textContent = text;
    td1.textContent = "Economic";
    td2.textContent = 550;
    tr.appendChild(td)
    tr.appendChild(td1)
    tr.appendChild(td2)
    addTable.appendChild(tr)
}

function buttonFindById(id) {
    let buttonfi = document.getElementById(id)
    buttonfi.classList.add("bg-button")
}

function selectVerify(text) {
    let buttonDisable = document.getElementById(text);
    buttonDisable.setAttribute("disabled", '')
    seatCount++;
    countSetDisplay()
    purchaseButtonEnable()
}

function countSetDisplay() {
    let countSeatDisplay = parseInt(diplayCont.innerText) - 1;
    diplayCont.innerText = countSeatDisplay;
    ticketCount.innerText = seatCount;
    totalTicketPrice()
    disabledInputs()
}

function totalTicketPrice() {
    priceTotal = priceTotal + 550;
    totalPrice.innerText = priceTotal;
    grandTotal.innerText = priceTotal;
}

function disabledInputs() {
    if (seatCount === 4) {
        for (let i = 0; i <= cuponCode.length; i++) {
            cuponCode[0].removeAttribute("readonly")
            cuponCode[1].removeAttribute("disabled")
        }
    }
}

function purchaseButtonEnable(){
    if(seatCount >= 0 && phone.value.length === 11){
        purchasebtn.removeAttribute("disabled");
    }else{
        purchasebtn.setAttribute("disabled", '');
    }
}