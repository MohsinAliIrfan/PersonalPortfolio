
document.querySelector('.closing').style.display = 'none'

document.querySelector('.openingside').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle("sidebar-go");

    if(document.querySelector('.sidebar').classList.contains("sidebar-go")){
        document.querySelector('.opening').style.display = "inline";
        document.querySelector('.closing').style.display = "none";
    }
    else{
        setTimeout(() => {
            document.querySelector('.closing').style.display = 'inline';
        }, 300);
        document.querySelector('.opening').style.display = "none";
    }
})