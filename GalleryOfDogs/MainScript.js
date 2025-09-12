const loadButton = document.getElementById('loadButton');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

async function loadPhotos() {
    try { 
        loader.classList.add('loader--visible');
        loadButton.disabled = true;

        const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
        const data = await response.json();
    
        gallery.innerHTML = '';

        data.message.forEach(photoUrl => {
            const photoElement = createPhotoElement(photoUrl);
            gallery.appendChild(photoElement);
            
        });
        
    } catch (error) {
        console.error('Ошибка загрузки', error)
        gallery.innerHTML = '<p class="error">Ошибка загрузки фотографий</p>';
        
    } finally{
        loader.classList.remove('loader--visible');
        loadButton.disabled = false;

    }
    
}

function createPhotoElement(url){
    const photoDiv = document.createElement('div');
    photoDiv.className = 'galleryItem';

    const img = document.createElement('img');
    img.className = 'galleryImage';
    img.src = url;
    img.alt = 'Собачка';

    photoDiv.appendChild(img);
    return photoDiv;
}

loadButton.addEventListener('click', loadPhotos);