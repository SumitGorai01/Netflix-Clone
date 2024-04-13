document.addEventListener("DOMContentLoaded", function() {
    
    var faqBoxes = document.querySelectorAll(".faqbox");

    faqBoxes.forEach(function(box) {
        box.addEventListener("click", function() {
            this.classList.toggle("active");

            var answer = this.querySelector('.answer');
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});