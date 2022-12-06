const product = [
    {
        id: 0,
        image: 'img/table11.webp',
        title: 'Solid Wood Table and Bench - High Quality',
        price: 233,
    },
    {
        id: 1,
        image: 'img/table12.webp',
        title: '52 in. Reclaimed Barnwood Distressed Solid Wood Dining Table',
        price: 293,
    },
    {
        id: 2,
        image: 'img/table13.webp',
        title: 'Stanton - Dining Table - Black',
        price: 507,
    },
    {
        id: 3,
        image: 'img/table14.webp',
        title: '70.9" Contemporary White Rectangular Sintered Stone Dining Table X-Base Dinner Table',
        price: 1499,
    },
    {
        id: 4,
        image: 'img/table15.webp',
        title: 'Better Homes and Gardens Cambridge Place Dining Table, Blue Mocha',
        price: 149,
    },
    {
        id: 5,
        image: 'img/table16.webp',
        title: 'Zinus Donna Wood And Metal Dining Table',
        price: 235,
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
