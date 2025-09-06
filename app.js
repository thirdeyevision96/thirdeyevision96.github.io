/*==================== MENU SHOW Y HIDDEN ====================*/
const hamburgerIcon = document.getElementById('hamburger_icon'),
      closeIcon = document.getElementById('close_icon'),
      navLinks = document.getElementById('nav_links'),
      navItems = document.querySelectorAll('.nav_items>a');


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(hamburgerIcon) {
    hamburgerIcon.addEventListener('click', () => {
      hamburgerIcon.classList.remove('active');
      hamburgerIcon.classList.add('not_active');
      closeIcon.classList.remove('not_active');
      closeIcon.classList.add('active');
      navLinks.classList.add('show_menu');
      navLinks.classList.remove('hide_menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(closeIcon) {
  closeIcon.addEventListener('click', () => {
    hamburgerIcon.classList.remove('not_active');
    hamburgerIcon.classList.add('active');
    closeIcon.classList.remove('active');
    closeIcon.classList.add('not_active');
    navLinks.classList.remove('show_menu');
    navLinks.classList.add('hide_menu');
  })

  /* ===== On clicking nav links MENU HIDDEN ===== */
  navItems.forEach(ele => {
    ele.addEventListener('click', () => {
      // e.preventDefault();
      hamburgerIcon.classList.remove('not_active');
      hamburgerIcon.classList.add('active');
      closeIcon.classList.remove('active');
      closeIcon.classList.add('not_active');
      navLinks.classList.remove('show_menu');
      navLinks.classList.add('hide_menu');
    })
  });
}


// // To play intro only once...
var TEVIntro = document.getElementById("tev-intro");
var bodyTag = document.getElementsByTagName("body");

const showIntro = setTimeout(intro, 6000);
function intro() {
    // TEVIntro.style.display="none";
    bodyTag[0].style.overflow="auto";
}
// //................................................//

// Slider JavaScript 

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: 'true',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

// Current Year Update
const currentYear = document.querySelector('.current_year');
const date = new Date();
currentYear.innerText = date.getFullYear();


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  //when the scroll is greater than 560 viewport height, add the show-scroll class to the tag with the scroll
  if(this.scrollY >= 560) {
      scrollUp.classList.add('show-scroll');
  } else {
      scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);



// ================= share FORM data to whatsapp ==================
const formData = document.querySelector(".tev_contact_form");
const contactName = document.querySelector("#name");
const contactNumber = document.querySelector("#contactNumber");
const contactEmail = document.querySelector("#contactEmail");
const functionDate = document.querySelector("#functionDate");
const functionVenue = document.querySelector("#functionVenue");
const functionCoverage = document.querySelectorAll('input[type="checkbox"]');
const contactTime = document.querySelectorAll('input[type="radio"]');

//get fucntionCoverage values -

function functionCover() {
  let ans = "";
  for(let val of functionCoverage) {
    if(val.checked) {
      ans += val.value + ', ';
    }
  }
  ans = ans.slice(0,-2);
  return ans;
} 

function contactTiming() {
  let time = "";
  for(let val of contactTime) {
    if(val.checked) {
      time = val.value;
    }
  }
  return time;
} 

formData.addEventListener('submit', (event) => {
  event.preventDefault();
  const func = functionCover();
  const cont = contactTiming();


  let contactData = `
  Name :- ${contactName.value}
  Number :- ${contactNumber.value}
  Email :- ${contactEmail.value}
  Function Date :- ${functionDate.value}
  Function Venue :- ${functionVenue.value}
  Function Coverage :- ${func}
  Contact Time :- ${cont}
  `;

  console.log(contactData);

  sendWhatsAppMessage();

  function sendWhatsAppMessage() {
    // Format the message for WhatsApp
    const whatsappMessage = `
Name :- ${contactName.value}
Number :- ${contactNumber.value}
Email :- ${contactEmail.value}
Function Date :- ${functionDate.value}
Function Venue :- ${functionVenue.value}
Function Coverage :- ${func}
Contact Time :- ${cont}
`;

  // Encode the message for a URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Create a deep link to open WhatsApp with the pre-filled message
  const whatsappLink = `https://wa.me/+917985584334/?text=${encodedMessage}`;

  // Open WhatsApp in a new tab or window
  window.open(whatsappLink, '_blank');
}

  formData.reset();
  alert("It will redirect to your whatsapp...!!!")
}
)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-moon';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})


const galleryImages = document.querySelectorAll(".tev_gallery_img");
const closeButton = document.querySelector(".closebtn");
const expandedImg = document.getElementById("expandedImg");
const imageViewer = document.querySelector(".imageViewer");
const imageFrame = document.querySelector(".imageFrame");

galleryImages.forEach((allImages) => {
  allImages.addEventListener('click', () => {

    if (allImages.className[4] == 'l') {
      expandedImg.classList.add('tev_imageViewer_landscape')
    } else if (allImages.className[4] == 'p') {
      expandedImg.classList.add('tev_imageViewer_portrait')
    }
    imageFrame.parentElement.style.display = "block";
    expandedImg.src = allImages.src;
 })
})

closeButton.addEventListener('click', () => {
  imageFrame.parentElement.style.display = "none";

  if (expandedImg.className[16] == 'l') {
    expandedImg.classList.remove('tev_imageViewer_landscape')
  } else if (expandedImg.className[16] == 'p') {
    expandedImg.classList.remove('tev_imageViewer_portrait')
  }

})
