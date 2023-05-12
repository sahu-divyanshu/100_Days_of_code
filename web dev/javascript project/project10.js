// Create the modal HTML

function createModal(){
    document.querySelector('body').insertAdjacentHTML('beforeend',`
    <div class = "modal-container" aria-modal="true" role = "dialog">
        <div class= "modal">
            <div class = "modal-overlay">
                <div class="modal-btn-container">
                    <button class = "modal-btn modal-arrow modal-arrow-left"
                    id = "left" aria-label="Previous image">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i> 
                    </button>

                    <button class = "modal-btn modal-close"
                    aria-label="Close Gallery">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>

                    <button class = "modal-btn modal-arrow modal-arrow-right"
                    id = "right" aria-label="Next image">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
     
            </div>
            <div class =  "modal-image-container">
            <img src="images/food/food-1.jpg" class="modal-image">
            <img src="images/food/food-2.jpg" class="modal-image">
            <img src="images/food/food-3.jpg" class="modal-image">
            <img src="images/food/food-4.jpg" class="modal-image">
             <img src="images/food/food-5.jpg" class="modal-image">
             <img src="images/food/food-6.jpg" class="modal-image">
             <img src="images/food/food-7.jpg" class="modal-image">
            </div>
        </div>
    </div>


    `)
}
createModal();

class Modal{
    constructor(modal){
        this.modal = modal;
        this.attachEventListners();
    }
    openModal(){
        this.modal.removeAttribute('hidden');
        this.modal.classList.add('active');
    }
    closeModal(){
        this.modal.removeAttribute('hidden','true');
        this.modal.classList.remove('active');
    }
    attachEventListners(){
        this.modal.addEventListner('click',(e)=>{
            e.target === e.currentTarget || e.target.classList.contains('modal-close')? this.closeModal():null;
        })
    }
}
const modalContainer = document.querySelector('.modal-container');
const modal = new Modal(modalContainer);
console.log(modal);

function openImageGallery(){
    document.querySelectorAll('[data-modal="true"]').forEach((btn) => {
        btn.addEventListener('click', function(){
            modal.openModal();
        })
    });
}
openImageGallery();
