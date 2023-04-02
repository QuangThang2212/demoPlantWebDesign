const filterAppear = document.querySelector("#filter_icon");
var content = document.getElementById("Content");
var filterList = document.getElementById("left-content");
var filter_icon = document.getElementById("filter_icon");
var filterCheck = true;

window.addEventListener("resize", function () {
  const width = window.innerWidth;
  if (width > 1000) {
    filterList.style.display = "block";
    content.style.backgroundColor = "white";
    document.body.style.overflow = "scroll";
  } else {
    filterList.style.display = "none";
    content.style.backgroundColor = "white";
  }
});

filterAppear.addEventListener("click", (e) => {
  e.preventDefault;

  if (filterCheck) {
    window.scrollTo(0, 0);
    content.style.backgroundColor = "rgba(21, 21, 21, 0.413)";
    filterList.style.display = "block";

    filter_icon.style.cssText = `
        background-color: var(--main-green-color);
        color: var(--main-text-color);
        padding: 6% 9%;
        border-radius: 30px;`;

    document.body.style.overflow = "hidden";
  } else {
    content.style.backgroundColor = "white";
    filterList.style.display = "none";

    filter_icon.style.cssText = `
        background-color: var(--main-text-color);
        color: black;`;

    document.body.style.overflow = "scroll";
  }
  filterCheck = !filterCheck;
});
