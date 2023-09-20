
var generateInput = document.getElementById("gnPin-inp");
var generateButton = document.getElementById("gnPin-btn");
var matchInput = document.getElementById("mtch-inp");
var delBtn = document.getElementById("del");
var delAllBtn = document.getElementById("delAll");
var btns = document.querySelectorAll(".btn");
var submitBtn = document.getElementById("sbmit-btn");
var msg = document.getElementById("msg");
var countP = document.querySelector(".count");

var totalCount = 3;
var count = 0;
// generatePin
const generatePin = ()=>{
    const randomCode = Math.floor(Math.random() * 9000) + 1000;
    generateInput.value = randomCode;

}

// clickBtn
const clickBtn = (e)=>{
    const btnValue = e.target.textContent;
    matchInput.value = `${matchInput.value.concat(btnValue)}`;
}

// delAll
const delAll = ()=>{
    matchInput.value = "";
}

// delOne
const delOne = ()=>{
    matchInput.value = "";
}
// delMsg
const delMsg = ()=>{
    msg.innerHTML = "";
    msg.classList.remove("msg-style");
}

// pra
const pra =(text)=>{
    msg.innerHTML = `${text}
        <button class="crossBtn"><i class="fa-solid fa-xmark"></i></button>
    `;
    msg.classList.add("msg-style");
    let crossBtn = msg.querySelector(".crossBtn");
    crossBtn.addEventListener("click", delMsg);
}

// checkValue
const checkValue = ()=>{
    if(generateInput.value == matchInput.value){
        pra("✅ Pin Matched... Secret door is opening for you");
    }else{
        count++;
        if(count>2){
            submitBtn.disabled = true;
            submitBtn.style.opacity = ".2";
            countP.innerHTML = `${totalCount - count} try left`;
        }else{
            countP.innerHTML = `${totalCount - count} try left`;
        }

        pra("❌ Pin Didn't Match, Please try again");
    }
}
  

// generateButton
generateButton.addEventListener("click", generatePin);

// Noraml-button
Array.from(btns).map((btn)=>{
    btn.addEventListener("click", clickBtn);
});
delAllBtn.addEventListener("click", delAll);
delBtn.addEventListener("click", delOne);

// submit-button
submitBtn.addEventListener("click", checkValue);
