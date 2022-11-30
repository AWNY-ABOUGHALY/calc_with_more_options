var myBtns = document.querySelectorAll('.butns')
var myEqual = document.querySelector('.Equal')
var myClear = document.querySelector('.clear')
var myClearAll = document.querySelector('.AC')
var myHistory = document.querySelector('.history')
var myReuslt = document.querySelector('.screen')
var removeLastDigit = document.querySelector('.Earser')
var changePlusMinus = document.querySelector('.PlusMinus')

myBtns.forEach((x)=>{
    x.addEventListener('click',()=>{
        if (myReuslt.value === "0" && x.value !== "+" && x.value !== "-" && x.value !== "*" && x.value !== "/" && x.value !== ".") {
                myReuslt.value = x.value;
        } else if (myReuslt.value.includes("+") === true || myReuslt.value.includes("-") === true || myReuslt.value.includes("*") === true || myReuslt.value.includes("/") === true){
            if (x.value === "+" || x.value === "-" || x.value === "*" || x.value === "/" ) {
                if (myReuslt.value.includes("(") || myReuslt.value.includes(")")) {
                        myReuslt.value += x.value;
                } else {
                myReuslt.value = eval(myReuslt.value) + x.value
                }
            } else {
                myReuslt.value += x.value;
            }
        } else {
            myReuslt.value += x.value;
        }
        document.querySelector("audio").play()
    })
})
myEqual.addEventListener('click',()=>{
    if (myHistory.value === "") {
        myHistory.value += myReuslt.value;
    } else {
        myHistory.value = ""
        myHistory.value += myReuslt.value;
    }
    if (myReuslt.value === "") {
        myReuslt.value = ""
    } else {
        myReuslt.value = eval(myReuslt.value);
    }
    document.querySelector("audio").play()
})
myClear.addEventListener('click',()=>{
    myReuslt.value = "0"
    document.querySelector("audio").play()
})
myClearAll.addEventListener('click',()=>{
    myReuslt.value = "0"
    myHistory.value = ""
    document.querySelector("audio").play()
})
removeLastDigit.addEventListener('click',()=>{
    if (myReuslt.value === myReuslt.value[0]) {
        myReuslt.value = 0
    } else {
        myReuslt.value = myReuslt.value.slice(0, myReuslt.value.length-1)
    }
    document.querySelector("audio").play()
})
changePlusMinus.addEventListener('click',()=>{
    if (myReuslt.value !== eval(myReuslt.value).toString()) {
        myReuslt.value = myReuslt.value
    } else {
        myReuslt.value = -(myReuslt.value)
    }
    document.querySelector("audio").play()
})

document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('.calc').style.display = "none"
})
document.querySelector('.minimize').addEventListener('click',()=>{
    document.querySelector('.container').style.display = "none";
    document.querySelector('.calc').classList.add('calcNoBorder')
})
document.querySelector('.maximize').addEventListener('click',()=>{
    document.querySelector('.container').style.display = "block";
    document.querySelector('.calc').classList.remove('calcNoBorder')
})