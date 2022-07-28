document.addEventListener("DOMContentLoaded", () => {
  const cookieBtn = document.querySelector(".cookie__accept");
  const cookieWindow = document.querySelector(".cookie");

  function checkCookieStatus () {
    if(localStorage.getItem("cookie_ok") === "1") {
      cookieWindow.classList.remove("show")
    } else {
      cookieWindow.classList.add("show")
    }
  }

  checkCookieStatus()

  cookieBtn.addEventListener("click", () => {
    localStorage.setItem("cookie_ok", "1")
    checkCookieStatus()
  })
})