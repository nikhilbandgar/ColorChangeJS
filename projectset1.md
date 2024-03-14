# Projects related to DOM

## Project Link
[click here]()

# Solution Code

## Project 1


### JavaScript
```javascript

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

```

### CSS

```css

* {
    margin: 0;
    padding: 0;
}

.parent-div {
    text-align: center;
    margin-top: 5vh;
}

h1 {
    padding: 50px;
}

.button {
    margin: 7px;
    width: 100px;
    height: 100px;
    display: inline-block;
    border: 1px black solid;
    border-radius: 50%;
}

#yellow {
    background-color: yellow;
}

#red {
    background-color: red;
}

#blue {
    background-color: blue;
}

#purple {
    background-color: purple;
}

#green {
    background-color: greenyellow;
}

#cyan {
    background-color: cyan;
}

#pink {
    background-color: pink;
}

#brown {
    background-color: brown;
}

#hotpink {
    background-color: hotpink;
}

.instruct {
    padding: 50px;
    text-align: center;
}

```
### HTML
```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="parent-div">
        <h1>Color Scheme Switcher</h1>
        <div class="button" id="yellow"></div>
        <div class="button" id="red"></div>
        <div class="button" id="blue"></div>
        <div class="button" id="purple"></div>
        <div class="button" id="green"></div><br>
        <div class="button" id="cyan"></div>
        <div class="button" id="pink"></div>
        <div class="button" id="brown"></div><br>
        <div class="button" id="hotpink"></div>
    </div>

    <div class="instruct">
        <h3>Try to clicking on one of the colors above to change background color of this page</h3>
    </div>


</body>
<script src="./script.js"></script>

</html>

```