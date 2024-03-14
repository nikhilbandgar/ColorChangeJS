const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(body)

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'yellow') {
            console.log(e.target.id)
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === "purple") {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === "cyan") {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === "pink") {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === "brown") {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === "hotpink") {
            body.style.backgroundColor = e.target.id;
        }

    });
});