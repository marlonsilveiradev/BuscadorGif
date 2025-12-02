const searchInput = document.getElementById('giphy')
const searchButton = document.querySelector('button')
const imgContent = document.querySelector('.img-content')


searchButton.addEventListener('click', async () => {
    try {
        const url = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=G2JnSkcw5UAIfSNWNzYCj3w3G91UVnuu&q=${searchInput.value}&limit=1`)
        const { data } = await url.json()
        console.log(data[0])
        if (data && data.length > 0) {
            imgContent.innerText = ''
            const imagem = data[0].images.original.webp
            let img = imgContent.querySelector('img')
            if (!img) {
                img = document.createElement('img')
                imgContent.appendChild(img)
                img.src = imagem
                img.alt = data[0].title
            } else {
                img.src = imagem
                img.alt = data[0].title
            }
        } else {
            imgContent.innerText = ''
            let msg = document.createElement('p')
            msg.innerText = "Nenhum resultado encontrado. Tente outro termo!"
            imgContent.appendChild(msg)
        }

    } catch (error) {
        console.log(error)
    }
})





