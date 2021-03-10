// Part 1 : 變數宣告區 =========================
var i_s = 0;//index of sliders, from 0
var prevBtn = document.querySelector("#btn-prev"),
    nextBtn = document.querySelector("#btn-next");
var item = document.getElementsByClassName("slider"),
    dots = document.getElementsByClassName("dots");
//取得是擁有相同類別名稱的一整組-->陣列

// Part 2 : 應對設定區 ========== 點擊後要做的事情
nextBtn.onclick = next;
prevBtn.onclick = prev;
//! 不可以加函數的小括弧
for (let i = 0 ; i < dots.length ; i++) {
    // dots[i].onclick = function () {
    //     clickSlider(i) ;
    // }
    dots[i].onclick = clickSlider(i) ;
    //要放參數的函數就要另外用function格式去寫，
    // 否則會無法讀取
}
// Part 3 : 馬上執行區 ==========================

showSlider();

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
function clickSlider(n) {
    i_s = n ;
    showSlider() ;
}
function next() {
    i_s++;
    if (i_s == item.length) i_s = 0;//額滿就歸零
    showSlider();//顯示此時的編號
}
function prev() {
    i_s--;
    if (i_s == -1) i_s += item.length;
    showSlider();//顯示此時的編號
}