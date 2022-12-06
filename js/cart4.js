const product = [
    {
        id: 0,
        image: 'img/drawer11.webp',
        title: 'Mainstays Classic 5 Drawer Dresser, Espresso',
        price: 112,
    },
    {
        id: 1,
        image: 'img/drawer12.webp',
        title: 'Wood Storage Dresser Cabinet - Grey',
        price: 65,
    },
    {
        id: 2,
        image: 'img/drawer13.webp',
        title: 'Kenton 5 Drawer Chest',
        price: 259,
    },
    {
        id: 3,
        image: 'img/drawer14.webp',
        title: 'Sorbus 8-Drawer Wide Dresser Chest - Rustic Brown',
        price: 147,
    },
    {
        id: 4,
        image: 'img/drawer15.webp',
        title: '7 Drawer Tall Dresser for Bedroom with Metal Handle',
        price: 170,
    },
    {
        id: 5,
        image: 'img/drawer16.webp',
        title: 'Astrid 6-Drawer Dresser, Espresso - Prepac Manufacturing EDBR-0402-1',
        price: 205,
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
