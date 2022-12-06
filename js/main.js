const productContainers = [...document.querySelectorAll('.product-container')];

const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })

});

/*---------------------------------------------------------------------------*/


let counter = 1



setInterval(()=>{

    document.querySelector('.img.show').classList.remove('show')
    const img = document.querySelector(`.img-${counter}`)
    img.classList.add('show')
    counter++

    if(counter >4){
        counter = 1
    }

},3000)

/*----------------------------------------------------------------------*/

let counter2 = 1



setInterval(()=>{

    document.querySelector('.img2.show2').classList.remove('show2')
    const img = document.querySelector(`.img2-${counter}`)
    img.classList.add('show2')
    counter2++

    if(counter2 >4){
        counter2 = 1
    }

},3000)

/*------------------------------------------------------------------------*/

const product = [
    {
        id: 0,
        image: 'img/couch1.webp',
        title: 'Serta - Palisade 78" Sofa - Navy Blue',
        price: 448,
    },
    {
        id: 1,
        image: 'img/couch12.webp',
        title: 'Simmons - Davis Beige Sofa',
        price: 299,
    },
    {
        id: 2,
        image: 'img/couch13.webp',
        title: '81" Upholstered Sofa',
        price: 383,
    },
    {
        id: 3,
        image: 'img/couch14.webp',
        title: 'Karina-Louise 2 - Piece Upholstered Sectional',
        price: 529,
    },
    {
        id: 4,
        image: 'img/couch15.webp',
        title: 'Lifestyle Solutions Harrington Sofa in Black',
        price: 299,
    },
    {
        id: 5,
        image: 'img/couch16.webp',
        title: 'Caniah 78.75" Round Arm Sofa',
        price: 439,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }


}
