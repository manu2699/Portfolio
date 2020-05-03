overlay = name => {
  setTimeout(() => {
    window.location = `${name}.html`;
  }, 1000);
  document.getElementById("overlay").style.height = "100%";
}

