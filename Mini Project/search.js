const input = document.querySelector('#speechToText');

input.addEventListener('keyup', e => {
    if (e.keyCode === 13) searchImage(input.value);
})

// the authorizer
const options = {
    headers: {
        Authorization: '563492ad6f91700001000001f32ab80c5cc34b56a9519c68eff68a94'
    }
}

// Function for picking out images from the apis

function searchImage(query) {
    const url = 
    `https://api.pexels.com/v1/search?query=${query}&per_page=6`;

    fetch(url, options)
    .then(d => d.json())
    .then(showImages)
    .catch(e => console.error(e))
}

// for picking images from the apis and calling it to the front end

function showImages({ photos }) {
    const result = document.querySelector('#results');
    let html = '';
    if (photos.length ) {
        photos.forEach(({ src }) => {
            html += 
            `<div class="result-img"
                            style="background-image: url('${src.medium}')">
                        </div>`
        })
    }else {
        html="No images found!!!";
    }
    result.innerHTML = html;
}