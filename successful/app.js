let kullanicilar = [

];
function kayit(){
    let kkadi = document.querySelector(".kkadi").value;
    let ksifre = document.querySelector(".ksifre").value;
    obj = JSON.parse(localStorage.getItem("kullanıcılar"));
    obj.push({kullanıcıadı:kkadi,sifre:ksifre})
    localStorage.setItem("kullanıcılar",JSON.stringify(obj))
    // console.log(obj)
    window.location.href = "index.html";
  }


  function kontrolet(){
    let gkadi = document.querySelector(".gkadi").value;
    let gsifre = document.querySelector(".gsifre").value;
    obj = JSON.parse(localStorage.getItem("kullanıcılar"));
    for (let i=0;i< obj.length;i++){
        if(gkadi==obj[i].kullanıcıadı && gsifre==obj[i].sifre){
            return true;
        }
    } 
}

  function giris(){
    kontrolet();
    // obj = JSON.parse(localStorage.getItem("kullanıcılar"));

    if(kontrolet()){

      document.getElementById("message").innerHTML = "3 Saniye içinde aktarılıyorsunuz!";
    setTimeout(function() {
      window.location.href = "iç-ekran.html";
    }, 3000);
        
    }
    else{
      document.getElementById("message").innerHTML = "Kullanıcı Adı veya Parola Hatalı!";
    }
    

    
  }
  
// localStorage.setItem("kullanıcılar",JSON.stringify(kullanicilar))

const colors = ['red', 'green', 'blue'];
let currentColorIndex = 0;

setInterval(() => {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}, 2000);

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
