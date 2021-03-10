// Part 1 : 變數宣告區 =========================
var i_s = 0;//index of sliders, from 0
var box = document.getElementById("slider-box") ;
var prevBtn = document.querySelector("#btn-prev"),
    nextBtn = document.querySelector("#btn-next");
var item = document.getElementsByClassName("slider"),
    dots = document.getElementsByClassName("dots");//取得是擁有相同類別名稱的一整組-->陣列
var interval, userInterval = box.getAttribute("data-crs-interval");//自動播放的預設時間間隔
var timer = setInterval(autoPlay, interval) ;
// 使用JS 內建的API：將函數以指定頻率重複執行
// 存成變數以備用。
var ifShowDots = box.getAttribute("data-crs-showdots") ;
console.log("ifShowDots = " + ifShowDots) ;

// Part 2 : 馬上執行區 ==========================
if(ifShowDots == "false") {//!都須字串賦值
    var dotBox = document.getElementById("dot-box") ;
    dotBox.style["display"] = "none" ;
}
showSlider();

// Part 3 : 互動設定區 =========================
nextBtn.onclick = next;
prevBtn.onclick = prev;
//! 不可以加函數的小括弧
for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function () {
        clickDot(i) ;
    }
    // dots[i].onclick = clickDot(i);
    //要放參數的函數就要另外用function格式去寫，
    // 否則會無法讀取
}

if (userInterval) interval = userInterval ;
else interval = 3000 ;//自動播放的預設時間間隔



// Part 4 : 函數宣告區 ==========================
function showSlider() {
    //通通解除active的狀態
    for (let i = 0; i < item.length; i++) {
        //項目
        item[i].classList.remove("slider-active");
        //點點
        dots[i].classList.remove("dots-active");
    }
    //啟動指定編號的狀態
    item[i_s].classList.add("slider-active");
    dots[i_s].classList.add("dots-active");
}
function clickDot(n) {
    i_s = n;
    showSlider();
    resetTimer() ;
}
function next() {
    i_s++;
    if (i_s == item.length) i_s = 0;//額滿就歸零
    showSlider();//顯示此時的編號
    resetTimer() ;
}
function prev() {
    i_s--;
    if (i_s == -1) i_s += item.length;
    showSlider();//顯示此時的編號
    resetTimer() ;
}

// 自動播放功能
function autoPlay() {
    next();
}


//實務需求：須配合按鈕的點擊

function resetTimer() {
    //重置計時器 = 還原＋重啟
    clearInterval(timer) ;
    timer = setInterval(autoPlay, interval) ;
}