
setInterval(function () {
    const show = document.querySelector("span[data-show]");
    const next =
      show.nextElementSibling || document.querySelector("span:first-child");
    const up = document.querySelector("span[data-up]");
  
    if (up) {
      up.removeAttribute("data-up");
    }
  
    show.removeAttribute("data-show");
    show.setAttribute("data-up", "");
  
    next.setAttribute("data-show", "");
  }, 2000);

  function toggle() {
    let links = document.getElementById("links");
    let blob = document.getElementById("blob");
    blob.classList.toggle("open");
    if (links.style.display == "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }

  function abrirLink() {
    
   window.location.href = "https://web.whatsapp.com/"
    
  }

