const body = document.getElementById('body')
body.innerHTML = `<div id="container"></div><div id="overlay"></div>`

const container = document.getElementById('container')

const NameOfImages = [
    'Australia', 'Captain', 'Cricket', 'Audience', 'India', 'Runner', 'Pakistan', 'Sachin', 'Sammy', 'Weight', 'Running', 'World Cup']

const HTMLofImages = []


for (let img of NameOfImages) {
    HTMLofImages.push(`
<div class="imageBox">
<img src="./images/${img}.jpg" class="image" title="${img}" />

<span class="thumbnail">Thumbnail</span>

<span class="hoverText">${img}</span>

</div>
`)
}

container.innerHTML = HTMLofImages.join(' ')

 // images from conatiner from HTML

var GridImages = document.getElementsByClassName('image')

// adding EventListner


// calling overlay element form html

var overlay = document.getElementById('overlay')

function makeBigger() {
    overlay.style.visibility = "visible"
    overlay.style.display = "block"
    overlay.style.backgroundColor = "black"
    overlay.innerHTML = `<h1>${this.title}</h1>
<img src="${this.src}">`
}


for (let singleImage of GridImages) {
    singleImage.addEventListener('click', makeBigger)
}


// close overlay

window.addEventListener('mouseup', closeMe)


function closeMe(pk) {
    if (pk.target !== overlay && pk.target.parentNode !== overlay) {
        overlay.style.visibility = "hidden";
        overlay.style.display = "none";
        overlay.innerHTML = ``
    }
}