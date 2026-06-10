const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }else{
        themeBtn.innerHTML = "🌙";
    }

});

document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Terima kasih! Pesan Anda telah terkirim.");

});
script.js