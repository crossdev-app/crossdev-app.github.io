// Variable declaration
let btnOn = document.getElementById("onPos");
let btnoff = document.getElementById("offPos");
let btnShadow = document.getElementById("shadowBtn");
let isON = false;
let swtch = document.getElementById("switch");
let boxSW = document.getElementById("boxSW");
let bulb = document.getElementById("bulb");
let lightning = document.getElementById("lightning");
let word1 = document.getElementById("word1");
let word2 = document.getElementById("word2");
let brand = document.getElementById("brand");
let findMeTXT = document.getElementById("subTitle");
let socIcon = document.querySelectorAll(".soc-icon");
let overlayBG = document.querySelector(".overlay");
// let menuList = document.querySelectorAll(".menu-list");
let menuList = document.querySelectorAll(".list-v-menu");
let contInfo = document.querySelector(".container-info");
let lamp = document.querySelector(".lamp");
let centerTextBox = document.querySelector(".text-center");
let clsBtn = document.querySelector(".cls-btn span");
let itsMe = document.getElementById("itsMe");
let itsMeMenu = document.getElementById("me");
let wrkshp = document.getElementById("wrkshp");
let wrkshpMenu = document.getElementById("workshop");
let collabs = document.getElementById("clbs");
let collabsMenu = document.getElementById("collabs");
let prjct = document.getElementById("prjct");
let projectMenu = document.getElementById("project");
let github = document.getElementById("github");
let linkedin = document.getElementById("linkedin");
let instagram = document.getElementById("instagram");
let twitter = document.getElementById("twitter");
let clickMail = document.getElementById("mailme");
let clickTele = document.getElementById("tele");
let clickCert = document.querySelectorAll(".cert-detail-btn");

// Class

class CardInfo {}

// Function Creation

// Screen Size Listener
function viewPoint(desktop, tablet, mobile) {
  var scrnSize = window.innerWidth;
  return scrnSize > 1025 ? desktop : scrnSize > 765 ? tablet : mobile;
}

function pushOn() {
  isON = true;
  btnShadow.style.top = "auto";
  btnShadow.style.bottom = 0;
  btnOn.style.backgroundColor = "#ccc";
  btnoff.style.backgroundColor = "#bbb";
  disapear(swtch);
}

function disapear(obj) {
  obj.style.opacity = "0";
  setTimeout(() => {
    boxSW.style.display = "none";
  }, 1500);
  bulbStart();
}

function bulbStart() {
  setTimeout(() => {
    bulb.setAttribute("src", "res/img/bulb_on.png");
    lightning.style.display = "block";
  }, 100);
  setTimeout(() => {
    bulb.setAttribute("src", "res/img/bulb_off.png");
    lightning.style.display = "none";
  }, 500);
  setTimeout(() => {
    bulb.setAttribute("src", "res/img/bulb_on.png");
    lightning.style.display = "block";
  }, 600);
  setTimeout(() => {
    bulb.setAttribute("src", "res/img/bulb_off.png");
    lightning.style.display = "none";
  }, 800);
  setTimeout(() => {
    bulb.setAttribute("src", "res/img/bulb_on.png");
    lightning.style.display = "block";
  }, 1500);
  setTimeout(() => {
    showText();
  }, 1700);
  setTimeout(() => {
    socIcon[0].classList.add("w-hover");
    menuList[0].style.transform = "TranslateX(0)";
  }, 1800);
  setTimeout(() => {
    socIcon[1].classList.add("w-hover");
    menuList[1].style.transform = "TranslateX(0)";
  }, 2000);
  setTimeout(() => {
    socIcon[2].classList.add("w-hover");
    menuList[2].style.transform = "TranslateX(0)";
  }, 2200);
  setTimeout(() => {
    socIcon[3].classList.add("w-hover");
    menuList[3].style.transform = "TranslateX(0)";
  }, 2400);
}

function showText() {
  word1.style.transform = "TranslateX(0)";
  word2.style.transform = "TranslateX(0)";
  brand.style.width = "200px";
  findMeTXT.style.opacity = "1";
  overlayBG.style.opacity = "0.9";
}

function openCard() {
  contInfo.style.width = viewPoint("80vw", "80vw", "100vw");
  setTimeout(() => {
    contInfo.style.height = "100vh";
    contInfo.style.top = "0";
    contInfo.style.boxShadow = "5px 0px 15px #aaa";
  }, 300);
  setTimeout(() => {
    clsBtn.style.opacity = "1";
  }, 1200);
  lamp.style.transform = viewPoint(
    "TranslateX(-20vw)",
    "TranslateX(0px)",
    "TranslateX(0px)"
  );
  centerTextBox.style.transform = viewPoint(
    "translate(-40vw, -50%)",
    "translate(-50%, -50%)",
    "translate(-50%, -50%)"
  );
}

function closeCard() {
  setTimeout(() => {
    contInfo.style.width = "0";
    lamp.style.transform = "TranslateX(0px)";
    centerTextBox.style.transform = "translate(-50%, -50%)";
  }, 500);
  setTimeout(() => {
    contInfo.style.height = "5px";
    contInfo.style.top = "50%";
    contInfo.style.boxShadow = "none";
  }, 200);
  closeMee();
  closeWrkshop();
  closeCollabs();
  closeProject();
  clsBtn.style.opacity = "0";
}

function openMe() {
  itsMeMenu.style.display = "block";
  setTimeout(() => {
    itsMeMenu.style.opacity = "1";
  }, 900);
}

function closeMee() {
  itsMeMenu.style.opacity = "0";
  setTimeout(() => {
    itsMeMenu.style.display = "none";
  }, 500);
}

function openWrkshop() {
  wrkshpMenu.style.display = "block";
  setTimeout(() => {
    wrkshpMenu.style.opacity = "1";
  }, 900);
}

function closeWrkshop() {
  wrkshpMenu.style.opacity = "0";
  setTimeout(() => {
    wrkshpMenu.style.display = "none";
  }, 500);
}

function openCollabs() {
  collabsMenu.style.display = "block";
  setTimeout(() => {
    collabsMenu.style.opacity = "1";
  }, 900);
}

function closeCollabs() {
  collabsMenu.style.opacity = "0";
  setTimeout(() => {
    collabsMenu.style.display = "none";
  }, 500);
}

function openProject() {
  projectMenu.style.display = "block";
  setTimeout(() => {
    projectMenu.style.opacity = "1";
  }, 900);
}

function closeProject() {
  projectMenu.style.opacity = "0";
  setTimeout(() => {
    projectMenu.style.display = "none";
  }, 500);
}

function openLink(urlLink) {
  window.open(urlLink);
}

function mailMe() {
  var mailTo = "malikdqa@gmail.com";
  var subject = "Collabs Time!";
  var url = `mailto:${mailTo}?subject=${subject}`;

  openLink(url);
}

// Execution
btnOn.addEventListener("click", () => pushOn());
menuList.forEach((item) => {
  item.addEventListener("click", () => {
    openCard();
  });
});
clsBtn.addEventListener("click", () => {
  closeCard();
});
itsMe.addEventListener("click", () => {
  openMe();
});
wrkshp.addEventListener("click", () => {
  openWrkshop();
});
collabs.addEventListener("click", () => {
  openCollabs();
});
prjct.addEventListener("click", () => {
  openProject();
});
instagram.addEventListener("click", () => {
  openLink("https://instagram.com/_malik.ab.azz");
});
linkedin.addEventListener("click", () => {
  openLink("https://www.linkedin.com/in/malik-abdul-aziz-a33991204");
});
twitter.addEventListener("click", () => {
  openLink("https://twitter.com/_301localhost");
});
github.addEventListener("click", () => {
  openLink("https://github.com/crossdev-app");
});

clickTele.addEventListener("click", () => {
  openLink("https://telegram.me/malikabazz");
});
clickMail.addEventListener("click", () => {
  mailMe();
});

clickCert.forEach((e, i) => {
  e.addEventListener("click", () => {
    switch (i) {
      case 0:
        openLink(
          "https://drive.google.com/file/d/1e-3qRG-ttHtjwbT9k-41QsOaTFO8Syxq/view"
        );
        break;
      case 1:
        openLink("https://progate.com/course_certificate/2b243214qqe1u1");
        break;
      case 2:
        openLink("https://progate.com/course_certificate/45dc0224qq8cv1");
        break;
      default:
        break;
    }
  });
});

var openProjectPage = (id) => {
  if (id == 1) {
    window.open("pages/project/todo-apps/index.html", "_blank");
  } else if (id == 2) {
    window.open("pages/project/landing-page-1/index.html", "_blank");
  } else if (id == 3) {
    window.open("https://crossdev-app-dashboard-react.netlify.app/", "_blank");
  }
};

// Test
// window.addEventListener('resize', ()=>{
//     console.log('View => ' + viewPoint('Desktop', 'Tablet', 'Mobile'));
// });
