// Scroll event
var headerFormSearch = document.querySelector(".my-nav__search");
var headerContent = document.querySelector(".header__content");
var headerButton = document.querySelector("#header__button");
var headerTop = document.querySelector(".header__top");
var headerBottom = document.querySelector(".header__bottom");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var currentPos = window.pageYOffset;
  if (currentPos > 0) {
    headerFormSearch.style.opacity = 1;
    headerTop.style.backgroundColor = "#fff";
    headerButton.classList.remove("button-outline--header");
    headerTop.style.borderColor = "#e5e5e5";
  } else {
    headerFormSearch.style.opacity = 0;
    headerTop.style.backgroundColor = "transparent";
    headerButton.classList.add("button-outline--header");
    headerTop.style.borderColor = "transparent";
  }

  if (currentPos > 100) {
    headerBottom.style.opacity = 1;
    headerBottom.style.transform = "rotateX(0)";
  } else {
    headerBottom.style.opacity = 0;
    headerBottom.style.transform = "rotateX(90deg)";
  }
}

// Side tabs
var header = document.querySelector(".header__content");
var headerWidth = header.clientWidth + 20;
document.querySelector(".dropdown__side-tabs__content").style.width =
  headerWidth + "px";

var dropTab = document.querySelector(".side-tabs__link");
dropTab.addEventListener("mouseover", function () {
  document.querySelectorAll(".tab-panel").forEach(function (element) {
    element.classList.remove("active");
  });
  document.querySelector("#gaming").classList.add("active");
});

/*Gaming*/
var tabMenuItem = document.querySelector("#gaming-tab");
tabMenuItem.addEventListener("mouseover", function () {
  document.querySelectorAll(".tab-panel").forEach(function (element) {
    element.classList.remove("active");
  });
  document.querySelector("#gaming").classList.add("active");
});

/* E-Commerce */
var tabMenuItem = document.querySelector("#e-commerce-tab");
tabMenuItem.addEventListener("mouseover", function () {
  document.querySelectorAll(".tab-panel").forEach(function (element) {
    element.classList.remove("active");
  });
  document.querySelector("#e-commerce").classList.add("active");
});

/* Book */
var tabMenuItem = document.querySelector("#book-tab");
tabMenuItem.addEventListener("mouseover", function () {
  document.querySelectorAll(".tab-panel").forEach(function (element) {
    element.classList.remove("active");
  });
  document.querySelector("#book").classList.add("active");
});

/* Podcasting */
var tabMenuItem = document.querySelector("#podcast-tab");
tabMenuItem.addEventListener("mouseover", function () {
  document.querySelectorAll(".tab-panel").forEach(function (element) {
    element.classList.remove("active");
  });
  document.querySelector("#podcasting").classList.add("active");
});

/* Political */
var tabMenuItem = document.querySelector("#political-tab");
tabMenuItem.addEventListener("mouseover", function () {
  document.querySelectorAll(".tab-panel").forEach(function (element) {
    element.classList.remove("active");
  });
  document.querySelector("#political").classList.add("active");
});

/* Influencer */
var tabMenuItem = document.querySelector("#influencers-tab");
tabMenuItem.addEventListener("mouseover", function () {
  document.querySelectorAll(".tab-panel").forEach(function (element) {
    element.classList.remove("active");
  });
  document.querySelector("#influencer").classList.add("active");
});

/* Architecture */
var tabMenuItem = document.querySelector("#architecture-tab");
tabMenuItem.addEventListener("mouseover", function () {
  document.querySelectorAll(".tab-panel").forEach(function (element) {
    element.classList.remove("active");
  });
  document.querySelector("#architecture").classList.add("active");
});

/* Real estate */
var tabMenuItem = document.querySelector("#real-estate-tab");
tabMenuItem.addEventListener("mouseover", function () {
  document.querySelectorAll(".tab-panel").forEach(function (element) {
    element.classList.remove("active");
  });
  document.querySelector("#real-estate").classList.add("active");
});

// Recently
let recentlyCards = document.querySelectorAll(".recently__slider .owl-item");
let indexCard = 100;
recentlyCards.forEach((element) => {
  element.style.zIndex = 90 + --indexCard;
});

function setHoverTooltip() {
  var recentlyActiveEnd = document.querySelectorAll(
    ".recently__slider .owl-item.active .card-pro__tooltip--left"
  );
  var cardPro = document.querySelectorAll(
    ".recently__slider .owl-item.active  .card-pro img"
  );
  cardPro[4].addEventListener("mouseover", function () {
    recentlyActiveEnd[cardPro.length - 1].classList.replace(
      "card-pro__tooltip--left",
      "card-pro__tooltip--right"
    );
  });
  cardPro[4].addEventListener("mouseleave", function () {
    recentlyActiveEnd[cardPro.length - 1].classList.replace(
      "card-pro__tooltip--right",
      "card-pro__tooltip--left"
    );
  });
  var recentlyActiveEndRight = document.querySelectorAll(
    ".recently__slider .owl-item.active .card-pro__tooltip--right"
  );
  cardPro[3].addEventListener("mouseover", function () {
    recentlyActiveEndRight[0].classList.replace(
      "card-pro__tooltip--right",
      "card-pro__tooltip--left"
    );
  });
}

var refresh = window.setInterval;
refresh(setHoverTooltip, 300);
