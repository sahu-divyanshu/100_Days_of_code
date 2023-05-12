const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7];
const selectedIndex = null;

imageIndexes.forEach(i =>{
    const image = document.createElement('img');
    image.src = `images/img${i}.jpg`;
    image.alt = `Background of ${i}th Project`;
    image.classList.add('galleryImg');

    image.addEventListener('click',()=>{
        popup.style.transform= `translateY(0)`;
        selectedImage.src = `images/img${i}.jpg`;
        selectedImage.alt = `Background of ${i}th Project`;
    })
    gallery.appendChild(image);

});
popup.addEventListener('click',() => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';

})