let dogSays = document.querySelector(".dogSays")

getWord()

function getWord() {
    let xhr = new XMLHttpRequest()

    xhr.open('get', 'https://api.oick.cn/dog/api.php')

    xhr.onload = function () {
        dogSays.innerHTML = xhr.responseText
    }

    xhr.send()
}

let btn1 = document.querySelector(".change")

btn1.addEventListener('click', () => {
    getWord()
})