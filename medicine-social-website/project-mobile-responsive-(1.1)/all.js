// this is for search bar

   var buttonUp = () => {
    const input = document.querySelector(".form-control");
    const cards = document.getElementsByClassName("col-12");
    let filter = input.value.toUpperCase();
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].classList.remove("d-none")
        } else {
            cards[i].classList.add("d-none")
        }
    }
}

// this is for search bar
