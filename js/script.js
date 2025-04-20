const swiper = new Swiper('.wrapper', {
    loop: true,
    spaceBetween: 30,

    //Autoplay
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1130: {
            slidesPerView: 3,
        },
        1520: {
            slidesPerView: 4,
        },
        1920: {
            slidesPerView: 5
        }
    }
});

let cards = ''
for (let index = 0; index < 20; index++) {
    cards += `
        <div class="card swiper-slide">
                            <div class="card-image">
                                <img src="images/img-produto.png" alt="Novo">
                                <p class="card-tag">Novo</p>
                            </div>
                            <div class="card-content">
                                <h3 class="card-text">&lt;h3&gt;Lorem ipsum dolor sit amet consectetuer adipiscing elit &lt;/h3&gt;</h3>
                                <div class="price">
                                    <div>
                                        <h3>R$100,00</h3>
                                        <h2><b>R$79,90</b></h2>
                                    </div>
                                    <h3 class="promotion">10% OFF</h3>
                                </div>
                                <div class="parcelas">
                                    <p>Ou em até <b>10x de R$ 7,90</b></p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="card-button">Comprar</a>
                                </div>
                            </div>
                        </div>
        `
}
let cardLists = document.querySelectorAll(".card-list");
cardLists.forEach(cardList => {
    cardList.innerHTML = cards;
});


let dropdown = document.querySelectorAll(".menu-categorias");

dropdown.forEach(element => {
    element.addEventListener("mouseenter", function inserir() {
        element.lastElementChild.innerHTML = `
                            <div class="flex">
                                <div class="departamentos-categorias-2 flex">
                                    <h3>Departamento</h3>
                                    <div class="categorias flex">
                                        <div class="categoria flex">
                                            <h4>Categoria</h4>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                        </div>
                                        <div class="categoria flex">
                                            <h4>Categoria</h4>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                        </div>
                                        <div class="categoria flex">
                                            <h4>Categoria</h4>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                            <p>Categoria</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="saiba-mais flex">
                                    <img src="images/img-caneca-dropdown.png" alt="#">
                                    <div class="flex">
                                        <p>Confira os Produtos <br><b>Que acabaram <br>De chegar</b></p>
                                        <button>VER TODOS</button>
                                    </div>
                                </div>
                            </div>
                        
        `
    })
});

let btn_search = document.querySelector(".btn-search")

btn_search.addEventListener("click", function getInput(){
    let inputValue = document.querySelector(".input-search").value;
    if(inputValue!=''){
        let textField = document.querySelector(".texto-input");
        textField.style.position = "absolute";
        textField.style.margin = "5px 0px 0px 10px";
        textField.style.fontSize = "0.8rem";
        textField.innerHTML = `<b>Você buscou por: ${inputValue}</b>`;
    }
    else{
        let textField = document.querySelector(".texto-input");
        textField.innerHTML = inputValue
    }
})