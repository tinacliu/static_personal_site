 // Wrap every letter in a span
let textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: function(el, i) {
      return 600 + 30 * i;
    }
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 3500,
    delay: function(el, i) {
      return 400 + 30 * i;
    }
  });



// scroll menu item to anchor on click

let menu = document.querySelectorAll(".menu li a");

menu.forEach((menuItem)=>{
  if(menuItem){menuItem.addEventListener('click', (event) => {
    const chosenItem = event.currentTarget.innerText;
    const itemText = chosenItem.substr(0,chosenItem.length-2);

    let chosenSection = document.querySelector('#about');

    switch(itemText){
      case 'about':
        chosenSection = document.querySelector('#about');
        break;
      case 'finance consulting':
        chosenSection = document.querySelector('#finance');
        break;
      case 'web app development':
        chosenSection = document.querySelector('#webapp');
        break;
      case 'contact':
        chosenSection = document.querySelector('#contact');
        break;
    }


    chosenSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })};
});

