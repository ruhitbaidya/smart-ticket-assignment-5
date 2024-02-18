let buttonFinds = document.querySelectorAll(".btn-click");

let priceTotal = 0;
let seatCount = 0;

for (let i = 0; i <= buttonFinds.length; i++) {
  buttonFinds[i].addEventListener("click", function (e) {
    if (seatCount >= 4) {
      alert("You Can Not Bye Any More Ticket");
    } else {
      let text = e.srcElement.innerText;
      tableAdd(text);
      buttonFindById(text);
      selectVerify(text);
    }
  });
}

function tableAdd(text) {
    let addTable = document.getElementById("addSeat");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  td.textContent = text;
  td1.textContent = "Economic";
  td2.textContent = 550;
  tr.appendChild(td);
  tr.appendChild(td1);
  tr.appendChild(td2);
  addTable.appendChild(tr);
}

function buttonFindById(id) {
  let buttonfi = document.getElementById(id);
  buttonfi.classList.add("bg-button");
}

function selectVerify(text) {
  let buttonDisable = document.getElementById(text);
  buttonDisable.setAttribute("disabled", "");
  seatCount++;
  countSetDisplay();
  purchaseButtonEnable();
}

function countSetDisplay() {
    let diplayCont = document.getElementById("countSeat");
  let ticketCount = document.getElementById("ticketCount");
  let countSeatDisplay = parseInt(diplayCont.innerText) - 1;
  diplayCont.innerText = countSeatDisplay;
  ticketCount.innerText = seatCount;
  totalTicketPrice();
  disabledInputs();
}

function totalTicketPrice() {
  let totalPrice = document.getElementById("totalPrice");
  let grandTotal = document.getElementById("grandTotal");
  priceTotal = priceTotal + 550;
  totalPrice.innerText = priceTotal;
  grandTotal.innerText = priceTotal;
}

function disabledInputs() {
  let cuponCode = document.getElementsByClassName("cupons");
  if (seatCount === 4) {
    for (let i = 0; i <= cuponCode.length; i++) {
      cuponCode[0].removeAttribute("readonly");
      cuponCode[1].removeAttribute("disabled");
    }
  }
}

function purchaseButtonEnable() {
  let purchasebtn = document.getElementById("purchase");
  let phone = document.getElementById("pachangerNamephone");
  if (seatCount > 0 && phone.value.length === 11) {
    purchasebtn.removeAttribute("disabled");
  } else {
    purchasebtn.setAttribute("disabled", "");
  }
}

function cuponVerify() {
  let cuponInput = document.getElementById("cuponValue");
  let discountText = document.getElementById("disText");
  let discountAmount = document.getElementById("disAmount");
  let inputVal = cuponInput.value.split(" ").join("").toUpperCase();
  if (inputVal === "NEW15") {
    let totalTaka = priceTotal;
    let disMoney = (totalTaka / 100) * 15;
    let totalgrentMoney = totalTaka - disMoney;
    grandTotal.innerText = totalgrentMoney;
    document.querySelector(".cupon-apply").classList.add("hidden");
    discountText.innerText = "Discount Price";
    discountAmount.innerHTML = ` BDT <span class="ml-[10px]">${disMoney}</span> `;
  } else if (inputVal === "COUPLE20") {
    let totalTaka = priceTotal;
    let disMoney = (totalTaka / 100) * 20;
    let totalgrentMoney = totalTaka - disMoney;
    grandTotal.innerText = totalgrentMoney;
    document.querySelector(".cupon-apply").classList.add("hidden");
    discountText.innerText = "Discount Price";
    discountAmount.innerHTML = ` BDT <span class="ml-[10px]">${disMoney}</span> `;
  } else {
    alert("Please Give A Valid Cupon Code For Discount");
  }
}
