//(
//    //async function getProductsData() {

//    //}
//)()
let products = []

async function getProductsData() {
    const res = await fetch('https://dummyjson.com/products?limit=100')
    const data = await res.json()
    console.log(data);
    products = data.products

    let productsElement = document.querySelector('.products__list')

    for(let i =0; i< data.products.length; i++) {
        let productItem = document.createElement('div')
        productItem.id = products[i].id
        productItem.className = '.products__list__item'

        let productItemTitle = document.createElement('div')
        productItemTitle.textContent = products[i].title

        let productItemImage = document.createElement('img')
        productItemImage.src = products[i].thumbnail
        productItemImage.style.width = '150px'
        productItemImage.style.height = '250px'

        productItem.appendChild(productItemTitle)
        productItem.appendChild(productItemImage)

        productItem.style.border = '1px solid'

        productsElement.appendChild(productItem)
    } 

}


getProductsData()