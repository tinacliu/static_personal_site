

  // display link when hover project card
function mouseOver(elem) {
  const cardHoverOver = elem.querySelector(".card-links");
  cardHoverOver.style.display = "flex";
}

function mouseOut(elem) {
  const cardHoverOver= elem.querySelector(".card-links");
  cardHoverOver.style.display = "none";
}

  // display < when hover over menu items
function changeText(text, elem) {
  elem.innerText = text
}


