var s_i = 1;//Sliders index
var prevBtn = document.querySelector("#btn-prev"),
    nextBtn = document.querySelector("#btn-next");

    
//點擊後要做的事情
nextBtn.onclick = next ;
prevBtn.onclick = prev ;
//! 不可以加函數的小括弧

// 函數宣告區 ==========================
function next() {
    s_i++ ;
    if (s_i >= 3) {
        s_i %= 3 ;
    }
    console.log(s_i) ;
}
function prev() {
    s_i-- ;
    if (s_i < 0) {
        s_i += 3 ;
        //! JS 的%在負數的計算會不符合數學上的餘數
        // 補救方法亦有： ((x&n) + n)
    }
    console.log(s_i) ;
}