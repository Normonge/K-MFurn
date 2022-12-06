const product = [
    {
        id: 0,
        image: 'img/bed11.webp',
        title: 'Jayside Bed',
        price: 320.00,
    },
    {
        id: 1,
        image: 'img/bed12.webp',
        title: 'Juararo Bed',
        price: 340.00,
    },
    {
        id: 2,
        image: 'img/bed13.webp',
        title: 'Penndel Bed',
        price: 540.00,
    },
    {
        id: 3,
        image: 'img/bed14.webp',
        title: 'Penndel Bed',
        price: 550.00,
    },
    {
        id: 4,
        image: 'img/bed15.webp',
        title: 'Forsan Upholstered Bed',
        price: 134.78,
    },
    {
        id: 5,
        image: 'img/bed16.webp',
        title: 'Cheyenne Driftwood Full Captains Bed',
        price: 598.00,
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
