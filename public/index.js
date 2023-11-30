const backenduri = window.location.origin;
console.log(window.location);

let cardList = document.getElementById("cardGrid");

let selectSector = document.getElementById("selectSector");

let selectCourse = document.getElementById("selectCourse");

let selectJob = document.getElementById("selectJob");


var modal = document.getElementById("myModal");

var modal1 = document.getElementById("myModal1");

var closeModal = document.getElementById("close");

var closeModal1 = document.getElementById("close1");

let enroll = document.getElementById("enroll");

let wdug = document.getElementById("wdug");

let regHdr = document.getElementById("regHdrh4");

let activeCourse = "";

var registerElement = document.getElementById("register");

var loginElement = document.getElementById("login");

var errorTextL = document.getElementById("errorTextL");
var errorTextR = document.getElementById("errorTextR");
const inputPlaceholder = document.getElementById("inputPlaceholder");
const successMsgholder = document.getElementById("successMsgholder");

const registerbtn = document.getElementById("registerbtn");
const loginbtn = document.getElementById("loginbtn");

const registerRadio = document.getElementById("registerRadio");
const loginRadio = document.getElementById("loginRadio");

const loader = document.getElementById("loader");
const loaderL = document.getElementById("loaderL");

let filteredData = [];

function handleRegister() {
  console.log("called");
  errorTextL.innerHTML = "";
  errorTextR.innerHTML = "";
  inputPlaceholder.style.display = "flex";
  successMsgholder.style.display = "none";
  registerElement.style.display = "block";
  loginElement.style.display = "none";
}

function handleLogin() {
  console.log("called");
  errorTextL.innerHTML = "";
  errorTextR.innerHTML = "";
  inputPlaceholder.style.display = "flex";
  successMsgholder.style.display = "none";
  registerElement.style.display = "none";
  loginElement.style.display = "block";
}

closeModal1.onclick = function () {
  // errorTextL.innerHTML = "";
  // errorTextR.innerHTML = "";
  // inputPlaceholder.style.display = "flex";
  // successMsgholder.style.display = "none";
  // registerElement.style.display = "block";
  // loginElement.style.display = "none";
  modal1.style.display = "none";
};

closeModal.onclick = function () {
  errorTextL.innerHTML = "";
  errorTextR.innerHTML = "";
  inputPlaceholder.style.display = "flex";
  successMsgholder.style.display = "none";
  // registerElement.style.display = "block";
  // loginElement.style.display = "none";
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    errorTextL.innerHTML = "";
    errorTextR.innerHTML = "";
    inputPlaceholder.style.display = "flex";
    successMsgholder.style.display = "none";
    // registerElement.style.display = "block";
    // loginElement.style.display = "none";
    registerbtn.value = "";
    modal.style.display = "none";
    modal1.style.display = "none";
  }
};

let cardData = [
  {
    img: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=",
    title: "Digital",
    sector: "Digital",
    duration: "60 Minutes",
    cost: 999,
    rating: 4,
  },
  {
    img: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=",
    title: "IOT(Internet Of Things)",
    sector: "IOT",
    duration: "60 Minutes",
    cost: 999,
    rating: 5,
  },
  {
    img: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=",
    title: "Web Developer",
    sector: "Digital",
    duration: "60 Minutes",
    cost: 999,
    rating: 3,
  },
  {
    img: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=",
    title: "Java - Full Stack Java Developer",
    sector: "Digital",
    duration: "60 Minutes",
    cost: 999,
    rating: 2,
  },
  {
    img: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=",
    title: "Artificial Intelligence",
    sector: "Artificial Intelligence",
    duration: "60 Minutes",
    cost: 999,
    rating: 1,
  },
  {
    img: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.webp?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=",
    title: "Cloud Analyst, Cloud Engineer",
    sector: "Cloud Computing",
    duration: "60 Minutes",
    cost: 999,
    rating: 0,
  },
];

function handleRegisterSubmit() {
  errorTextR.innerHTML = "";
  errorTextL.innerHTML = "";
  loader.style.display = "block";
  loginRadio.disabled = true;
  registerRadio.disabled = true;
  registerbtn.style.display = "none";
  let nielitid = document.getElementById("nielitid").value;
  let emailid = document.getElementById("registeremail").value;
  let password = document.getElementById("registerpassword").value;

  if (emailid == "" || nielitid == "" || password == "") {
    errorTextR.innerHTML = "All fields are mandatory!";
    loader.style.display = "none";
    loginRadio.disabled = false;
    registerRadio.disabled = false;
    registerbtn.style.display = "block";
  } else {
    const data = {
      nielitid: nielitid,
      email: emailid,
      password: password,
      course: activeCourse
    };

    fetch(`${backenduri}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorResponse) => {
            throw new Error(
              errorResponse.msg || "Network response was not ok."
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        // localStorage.setItem("user", JSON.stringify(data));
        inputPlaceholder.style.display = "none";
        successMsgholder.style.display = "flex";
        loader.style.display = "none";
        loginRadio.disabled = false;
        registerRadio.disabled = false;
        registerbtn.style.display = "block";
        // Handle the response data here
      })
      .catch((error) => {
        errorTextR.innerHTML = error;
        console.error("Error:", error);
        loader.style.display = "none";
        loginRadio.disabled = false;
        registerRadio.disabled = false;
        registerbtn.style.display = "block";
        // Handle errors here
      });
  }
}

function handleLoginSubmit() {
  errorTextL.innerHTML = "";
  errorTextR.innerHTML = "";
  loaderL.style.display = "block";
  loginRadio.disabled = true;
  registerRadio.disabled = true;
  loginbtn.style.display = "none";
  let emailid = document.getElementById("loginemail").value;
  let password = document.getElementById("loginpassword").value;

  if (emailid == "") {
    errorTextL.innerHTML = "Email id is mandatory!";
    loaderL.style.display = "none";
    loginRadio.disabled = false;
    registerRadio.disabled = false;
    loginbtn.style.display = "none";
  } else {
    const data = {
      email: emailid,
      password: password,
    };

    fetch(`${backenduri}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "http://127.0.0.1:5500/",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorResponse) => {
            throw new Error(
              errorResponse.msg || "Network response was not ok."
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("user", JSON.stringify(data?.data));
        modal.style.display = "none";
        loaderL.style.display = "none";
        loginRadio.disabled = false;
        registerRadio.disabled = false;
        loginbtn.style.display = "block";
        // Handle the response data here
      })
      .catch((error) => {
        errorTextL.innerHTML = error;
        console.error("Error:", error);
        loaderL.style.display = "none";
        loginRadio.disabled = false;
        registerRadio.disabled = false;
        loginbtn.style.display = "block";
        // Handle errors here
      });
  }
}

function LoadSector() {
  let obj = { "": "" };
  cardData.map((element) => {
    obj[element.sector] = element.sector;
  });
  Object.keys(obj).map((element) => {
    let optionElement = document.createElement("option");
    optionElement.setAttribute("value", obj[element]);
    optionElement.setAttribute("style", "line-height:100px");
    optionElement.innerHTML = element;
    selectSector.appendChild(optionElement);
    selectJob.appendChild(optionElement.cloneNode(true));
    selectCourse.appendChild(optionElement.cloneNode(true));
  });
}

selectSector.addEventListener("change", function (e) {
  // console.log(e.target.value)
  cardList.innerHTML = "";

  cardRender(e.target.value);
});

function cardRender(sector) {
  let data =
    sector === ""
      ? [...cardData]
      : cardData.filter(
          (element) => element.sector.toLowerCase() === sector.toLowerCase()
        );

  filteredData = data;
  filteredData.forEach((element) => {
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");

    let imgElement = document.createElement("img");
    imgElement.setAttribute("class", "courseImage");
    imgElement.setAttribute("src", element.img);

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "paddingLeft5 wordBreak paddingBottom4");

    let header4 = document.createElement("h4");
    header4.innerHTML = element.title;
    header4.setAttribute("style", "margin-bottom : 15px");

    let starRating = document.createElement("div");
    // starRating.setAttribute("class","rate")

    let count = element?.rating;
    for (let i = 0; i < 5; i++) {
      let star1 = document.createElement("img");
      star1.setAttribute(
        "src",
        count > 0 ? "./images/star.svg" : "./images/emptystar.svg"
      );
      count--;
      starRating.appendChild(star1);
    }

    let durationTag = document.createElement("div");
    durationTag.setAttribute("style", "margin-bottom : 0px; margin-top : 10px");
    durationTag.setAttribute("class", "fontSmall secondaryFont");
    durationTag.innerHTML = `Duration - ${element.duration}`;

    let costTag = document.createElement("div");
    costTag.setAttribute("style", "margin-bottom : 10px; margin-top : 4px");
    costTag.setAttribute("class", "fontMedium");

    costTag.innerHTML = `Cost INR ${element.cost}`;

    let buttonTag = document.createElement("button");
    buttonTag.setAttribute("class", "primaryButton");
    buttonTag.innerHTML = `Enroll`;
    buttonTag.addEventListener("click", function (e) {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user?.EMAIL) {
        alert("you have logged in");
      } else {
        // showDialog()
        console.log("sss",element.title)
        modal.style.display = "block";
        regHdr.innerHTML = `Register here to enroll in "${element.title}"`;
        activeCourse = element.title;
      }
    });
    //add onclick function to all button here

    cardContent.appendChild(header4);
    cardContent.appendChild(starRating);
    cardContent.appendChild(durationTag);
    cardContent.appendChild(costTag);
    cardContent.appendChild(buttonTag);

    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(cardContent);

    cardList.appendChild(cardDiv);
  });
}

LoadSector();
cardRender("");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let sC = document.getElementById("searchCourse");

sC.addEventListener("keydown", function filterCourses(e) {
  let val = e.target.value;

  // cardList.innerHTML=""
  let data =
    val === ""
      ? filteredData
      : filteredData.filter((element) =>
          element.title.toLowerCase().includes(val.toLowerCase())
        );

  console.log("called", data);
  if (data.length === 0) {
    cardList.innerHTML = "";
    let dumm = document.createElement("div");
    dumm.setAttribute("style", "width :100%;height:600px");
    let h2x = document.createElement("h2");
    h2x.innerHTML = "No Courses found...";
    h2x.setAttribute(
      "style",
      "color : #733e90;margin-top:100px;text-align:center;"
    );
    dumm.appendChild(h2x);
    cardList.appendChild(dumm);
  }

  data.forEach((element, index) => {
    if (index === 0) {
      cardList.innerHTML = "";
    }
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");

    let imgElement = document.createElement("img");
    imgElement.setAttribute("class", "courseImage");
    imgElement.setAttribute("src", element.img);

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "paddingLeft5 wordBreak paddingBottom4");

    let header4 = document.createElement("h3");
    header4.innerHTML = element.title;
    header4.setAttribute("style", "margin-bottom : 5px");

    let starRating = document.createElement("div");
    // starRating.setAttribute("class","rate")

    let count = element?.rating;
    for (let i = 0; i < 5; i++) {
      let star1 = document.createElement("img");
      star1.setAttribute(
        "src",
        count > 0 ? "./images/star.svg" : "./images/emptystar.svg"
      );
      count--;
      starRating.appendChild(star1);
    }

    let durationTag = document.createElement("div");
    durationTag.setAttribute("style", "margin-bottom : 0px; margin-top : 10px");
    durationTag.setAttribute("class", "fontSmall secondaryFont");
    durationTag.innerHTML = `Duration - ${element.duration}`;

    let costTag = document.createElement("div");
    costTag.setAttribute("style", "margin-bottom : 10px; margin-top : 4px");

    costTag.innerHTML = `Cost INR ${element.cost}`;

    let buttonTag = document.createElement("button");
    buttonTag.setAttribute("class", "primaryButton");
    buttonTag.innerHTML = `Enroll`;
    buttonTag.addEventListener("click", function (e) {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user?.EMAIL) {
        alert("you have logged in");
      } else {
        // showDialog()
        modal.style.display = "block";
      }
    });
    //add onclick function to all button here

    cardContent.appendChild(header4);
    cardContent.appendChild(starRating);
    cardContent.appendChild(durationTag);
    cardContent.appendChild(costTag);
    cardContent.appendChild(buttonTag);

    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(cardContent);

    cardList.appendChild(cardDiv);
  });
});

function filterCourses() {
  let val = document.getElementById("searchCourse").value;

  // cardList.innerHTML=""
  let data =
    val === ""
      ? filteredData
      : filteredData.filter((element) =>
          element.title.toLowerCase().includes(val.toLowerCase())
        );

  console.log("called", data);

  data.forEach((element, index) => {
    if (index === 0) {
      let dumm = document.createElement("div");
      dumm.setAttribute("style", "width :100%;height:600px");
      cardList.innerHTML = "";
    }
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");

    let imgElement = document.createElement("img");
    imgElement.setAttribute("class", "courseImage");
    imgElement.setAttribute("src", element.img);

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "paddingLeft10 wordBreak paddingBottom4");

    let header4 = document.createElement("h4");
    header4.innerHTML = element.title;
    header4.setAttribute("style", "margin-bottom : 5px");

    let starRating = document.createElement("div");
    // starRating.setAttribute("class","rate")

    let count = element?.rating;
    for (let i = 0; i < 5; i++) {
      let star1 = document.createElement("img");
      star1.setAttribute(
        "src",
        count > 0 ? "./images/star.svg" : "./images/emptystar.svg"
      );
      count--;
      starRating.appendChild(star1);
    }

    let durationTag = document.createElement("div");
    durationTag.setAttribute("style", "margin-bottom : 0px; margin-top : 10px");
    durationTag.setAttribute("class", "fontSmall secondaryFont");
    durationTag.innerHTML = `Duration - ${element.duration}`;

    let costTag = document.createElement("div");
    costTag.setAttribute("style", "margin-bottom : 10px; margin-top : 4px");

    costTag.innerHTML = `Cost INR ${element.cost}`;

    let buttonTag = document.createElement("button");
    buttonTag.setAttribute("class", "primaryButton");
    buttonTag.innerHTML = `Apply`;
    buttonTag.addEventListener("click", function (e) {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user?.EMAIL) {
        alert("you have logged in");
      } else {
        // showDialog()
        modal.style.display = "block";
      }
    });
    //add onclick function to all button here

    cardContent.appendChild(header4);
    cardContent.appendChild(starRating);
    cardContent.appendChild(durationTag);
    cardContent.appendChild(costTag);
    cardContent.appendChild(buttonTag);

    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(cardContent);

    cardList.appendChild(cardDiv);
  });
}

function modClick(element) {
  modal1.style.display = "block";

  if (element === "enroll") {
    enroll.style.display = "block";
    wdug.style.display = "none";
  } else {
    enroll.style.display = "none";
    wdug.style.display = "block";
  }
}
