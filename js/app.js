const submitButton = document.querySelector(".submit");
const ratingButtons = document.querySelectorAll(".rating-button");


submitButton.addEventListener("click", function() {
    document.querySelector("#ratingState").classList.add("hide");
    document.querySelector("#thankYouState").classList.remove("hide");
});

ratingButtons.forEach(ratingButton => {
    ratingButton.addEventListener("click", function() {
        for(var i = 0; i < ratingButtons.length; i++) {
            if(ratingButtons[i].classList.contains("active")){
                ratingButtons[i].classList.remove("active");
            }
        }
        ratingButton.classList.add("active");
        document.querySelector(".rating").innerText = ratingButton.value;
    });
});