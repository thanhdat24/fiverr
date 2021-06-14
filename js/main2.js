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
window.addEventListener("resize", function () {
  resizeDropdown();
});
// document.getElementsByTagName("BODY")[0].onresize = function () {
//   resizeDropdown();
// };

function resizeDropdown() {
  headerWidth1 = window.innerWidth + 20;
  document.querySelector(".dropdown__side-tabs__content").style.width =
    headerWidth1 + "px";
}

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

function setCardDefault(index) {
  let recentlyCardsTooltip = document.querySelectorAll(
    ".recently__slider .owl-item .card-pro__tooltip--left"
  );

  recentlyCardsTooltip[index].style.transform = "scaleX(1)";
  recentlyCardsTooltip[index].style.left = "50%";
  recentlyCardsTooltip[index].style.bottom = "150%";
  recentlyCardsTooltip[index].children[0].style.transform = "unset";
}

function setCardChange() {
  let recentlyCardsActiveTooltip = document.querySelectorAll(
    ".recently__slider .owl-item.active .card-pro__tooltip--left"
  );

  recentlyCardsActiveTooltip[4].style.transform = "scaleX(-1)";
  recentlyCardsActiveTooltip[4].children[0].style.transform = "scaleX(-1)";
  recentlyCardsActiveTooltip[4].style.left = "-200%";
  recentlyCardsActiveTooltip[4].style.bottom = "150%";
}

function setCardTooltip() {
  let recentlyCards = document.querySelectorAll(".recently__slider .owl-item");
  let indexCard = 100;
  recentlyCards.forEach((element, index) => {
    element.style.zIndex = 90 + --indexCard;
  });
}

setCardTooltip();

function setHoverTooltip() {
  let recentlyCardsActive = document.querySelectorAll(
    ".recently__slider .owl-item.active"
  );

  recentlyCardsActive.forEach(function (card, index) {
    card.addEventListener("mouseover", function hover() {
      setCardDefault(index);
      if (index === 4) {
        setCardChange();
      }
      recentlyCardsActive[index].style.zIndex =
        recentlyCardsActive[index - 1].style.zIndex + 1;
    });

    card.addEventListener("mouseleave", function leave() {
      setCardDefault(4);
      recentlyCardsActive[index].style.zIndex =
        recentlyCardsActive[index - 1].style.zIndex - 1;
    });
  });
}

//sometimes log err when action is faster than 1s
//or if movement is too fast, zIndex will not be set fast enough
var refresh = window.setInterval;
refresh(setHoverTooltip, 1000);

// Video
var myVideo1 = document.getElementById("video1");
var playButton1 = document.getElementById("play1");
var myVideo2 = document.getElementById("video2");
var playButton2 = document.getElementById("play2");
var myVideo3 = document.getElementById("video3");
var playButton3 = document.getElementById("play3");
var closeButton = document.querySelectorAll(".close.video");

playButton2.addEventListener("click", function () {
  myVideo2.currentTime = 0;
  myVideo2.play();
});

playButton3.addEventListener("click", function () {
  myVideo3.currentTime = 0;
  myVideo3.play();
});

playButton1.addEventListener("click", function () {
  myVideo1.currentTime = 0;
  myVideo1.play();
});

closeButton.forEach(function (element) {
  element.addEventListener("click", function () {
    myVideo1.currentTime = 0;
    myVideo1.pause();
    myVideo2.currentTime = 0;
    myVideo2.pause();
    myVideo3.currentTime = 0;
    myVideo3.pause();
  });
});
//footer
var screenSize = window.innerWidth;
var footerMenu = document.querySelectorAll(".footer__menu");
var footerTitle = document.querySelectorAll(".footer__title");
// footerMenu.forEach(function (element) {
//   element.classList.remove("collapse");
// });
if (screenSize > 992) {
  footerMenu.forEach(function (element) {
    // element.classList.add("show");
    element.classList.remove("collapse");
  });
}

window.addEventListener("resize", function () {
  screenSize = window.innerWidth;
  if (screenSize > 992) {
    footerMenu.forEach(function (element) {
      // element.classList.add("show");
      element.classList.remove("collapse");
      // footerTitle.dataset.toggle = "collapse-none";
    });
  } else {
    footerMenu.forEach(function (element) {
      // element.classList.remove("show");
      element.classList.add("collapse");
      // footerTitle.dataset.toggle = "collapse";
    });
  }
});
