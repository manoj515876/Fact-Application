let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factEl = document.getElementById("fact");

function send(Event) {
    if (Event.key === "Enter") {
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputEl.value;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {

                let {
                    fact
                } = jsonData
                factEl.textContent = jsonData.fact;
            })
    }
}

userInputEl.addEventListener("keydown", send)