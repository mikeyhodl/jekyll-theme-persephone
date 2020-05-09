import Turbolinks from "turbolinks"

export default function () {
  // 清除所有页面跳转的交互效果
  var emits = document.getElementsByClassName("emit");
  if( emits.length > 0 ){
    for( var i = 0, len = emits.length; i < len; i ++ ){
      emits[i].classList.remove("emit");
    }
  }

  // 文章内容页，返回归档页面按钮
  const archiveBtn = document.getElementById("archiveBtn");
  if( archiveBtn ) {
    archiveBtn.onclick = function(event) {
      animateVisit(event, 300);
    }
  }

  const navLinks = document.querySelectorAll(".top-nav .nav-link");
  
  if (navLinks) {
    navLinks.forEach(link => {
      link.onclick = function(event) {
        animateVisit(event, 300);
      }
    })
  }
}


function animateVisit(e, delay) {
  e.preventDefault();
  var ele = e.target;
  while( ele.tagName != "A" ){
    ele = ele.parentNode;
  }
  ele.classList.add("emit");
  setTimeout(function() {
    console.log("time out")
    Turbolinks.visit(ele.href);
  }, delay);
}