var faqSectionButtons = document.querySelectorAll(".faq__accordion__expand-button")
var filterLinks = document.querySelectorAll(".faq__filter-link")
var faqSections = document.querySelectorAll('.faq__section')

faqSectionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Pass the button click event function this which will equal the FAQ section that has been clicked
    buttonClickEvent(this)
  });

  // Add same event for when button is hit with space or enter to ensure keyboard control also
  button.addEventListener("keydown", function (event) {
    // Controls Down Arrow
    if(event.keyCode === 40) {
      document.getElementById(this.getAttribute("data-next-sibling")).focus();
    }

    // Controls Up Arrow
    if(event.keyCode === 38) {
      document.getElementById(this.getAttribute("data-previous-sibling")).focus();
    }
  })
})

function buttonClickEvent(clickedSection) {
  let expanded = clickedSection.getAttribute("aria-expanded") === "true" || false

  let subSection = document.querySelector(
    "#" + clickedSection.getAttribute("aria-controls")
  )

  clickedSection.setAttribute("aria-expanded", !expanded)
  subSection.hidden = !subSection.hidden
}

filterLinks.forEach(function (button) {
  button.addEventListener("click", function() {
    var filterType = this.getAttribute("data-filter-type");

    faqSections.forEach(function(section) {

      if(filterType !== 'Display All') {
        filterType === section.getAttribute("data-section-title") ? section.hidden = false : section.hidden = true
      } else {
        section.hidden = false
      }
    })
  })
})
