const wrap = document.querySelector(".slideWrapper")
const menuItem = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Gowns",
        price: 150,
        colors: [
            {
                code: "black",
                img: "images/woman-gown2.png",
            },
            {
                code: "blue",
                img: "images/woman-gownblue.png",
            },
            {
                code: "pink",
                img: "images/woman-gownpink.png",
            },
        ],
    },
    {
        id: 2,
        title: "Shoes",
        price: 102,
        colors: [
            {
                code: "black",
                img: "images/black-shoe.png",
            },
            {
                code: "blue",
                img: "images/blueheel.png",
            },
            {
                code: "pink",
                img: "images/pink-shoe.png",
            },
        ],
    },
    {
        id: 1,
        title: "Wedding",
        price: 300,
        colors: [
            {
                code: "black",
                img: "images/wedblack.png",
            },
            {
                code: "blue",
                img: "images/wed2.png",
            },
            {
                code: "pink",
                img: "images/wedpink.png",
            },
        ],
    },
    {
        id: 1,
        title: "Baby Wears",
        price: 90,
        colors: [
            {
                code: "pink",
                img: "images/babypink.png",
            },
            {
                code: "black",
                img: "images/babyblack.png",
            },
            {
                code: "blue",
                img: "images/babyblue.png",
            },

        ],
    }
    
]



let selectedProduct = products[0]

const selectedProductImg = document.querySelector(".productImg")
const selectedProductTitle = document.querySelector(".productTitle")
const selectedProductPrice = document.querySelector(".productPrice")
const selectedProductColors = document.querySelectorAll(".color")
const selectedProductSizes = document.querySelectorAll(".size")


menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrap.style.transform = `
                                translateX(${-100*index}vw)
        
                            `
        //change the selected product
        selectedProduct = products[index]

        selectedProductTitle.textContent = selectedProduct.title
        selectedProductImg.src = selectedProduct.colors[0].img
        selectedProductPrice.textContent = "$" + selectedProduct.price
        selectedProductColors.forEach((color, index) => {
            color.style.backgroundColor = selectedProduct.colors[index].code

        })
    })
})

selectedProductSizes.forEach((size, index) => {
        size.addEventListener("click",()=>{
            selectedProductSizes.forEach((size)=> {
                size.style.backgroundColor = "white"
                size.style.color = "black"
            })
            size.style.backgroundColor = "black"
            size.style.color = "white"
         })
    
 
    
})

selectedProductColors.forEach((color, index) => {
    color.addEventListener("click", ()=>{
        selectedProductImg.src = selectedProduct.colors[index].img

    })
})

//payment form
const productBtn = document.querySelector(".productBtn")
const pay = document.querySelector(".pay")
const close = document.querySelector(".closeForm")

productBtn.addEventListener("click", () => {
    pay.style.display = "block"
})
close.addEventListener("click", () => {
    pay.style.display = "none"
})