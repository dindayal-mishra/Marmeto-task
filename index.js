const inp=document.querySelector("input")
inp.value=1
const subtotal=document.querySelector(".subtotal")

const remove=document.querySelector(".remove")
const product=document.querySelector(".product")

const cartsubtotal=document.querySelector(".cartsubtotal")
// const subtotalCart = document.querySelector("#subtotal")
const total = document.querySelector(".total")


const fdata = async()=>{
    const data = await fetch("https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889")
    // console.log(data);
    
    const res = await data.json()
    console.log(res);
    console.log(res.items[0].handle);
    
    
    // console.log(res.items[0]);
    // const sofaName=res.items[0].handle
    // document.getElementById("sofaName").innerHTML=sofaName
    // console.log(sofaName);

    const imageUrl = res.items[0].image;
    // console.log(imageUrl);
    document.getElementById('apiImage').src = imageUrl;

    const product_title=res.items[0].product_title
    document.getElementById("sofaName").innerHTML=product_title
    // console.log(product_title);

    const product_price=res.items[0].price
    document.getElementById("productPrice").innerHTML=product_price
    // console.log(product_price);
  
    inp.addEventListener("change",()=>{
        // console.log(inp.value*product_price);
        subtotal.innerText=`Rs.${inp.value*product_price}`
        cartsubtotal.innerText = `Rs.${inp.value*product_price}`
        // subtotalCart.innerText = `Rs.${inp.value*product_price}`
        total.innerText =` Rs.${inp.value*product_price}`
    })

    remove.addEventListener("click",()=>{
        product.style.display="none"
        cartsubtotal.style.display="none"
        total.style.display="none"
    })

    const checkout = document.querySelector(".checkout")
    checkout.addEventListener("click", ()=>{
        alert(` Total Price Rs.${inp.value*product_price}`)
    })
    
}
fdata()



