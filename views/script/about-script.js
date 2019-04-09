$("#fullpage").fullpage();
let width = window.outerWidth
if (width < 576 && width > 450) {
    document.querySelector("#col_a").classList.replace("col-12", "col-6");
    document.querySelector("#col_b").classList.replace("col-12", "col-6");
}else{
    document.querySelector("#col_a").classList.replace("col-6", "col-12");
    document.querySelector("#col_b").classList.replace("col-6", "col-12");
}
window.onresize = function () {
    let width = window.outerWidth;
    if (width < 576 && width > 450) {
        document.querySelector("#col_a").classList.replace("col-12", "col-6");
        document.querySelector("#col_b").classList.replace("col-12", "col-6");
    }else {
        document.querySelector("#col_a").classList.replace("col-6", "col-12");
        document.querySelector("#col_b").classList.replace("col-6", "col-12");
    }
}