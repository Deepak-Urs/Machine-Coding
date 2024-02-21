//(
//    //async function getProductsData() {

//    //}
//)()
let products = []
let page = 0
let totalPages = 0
let pages = []

let productsElement = document.querySelector('.products__list')
let paginator = document.querySelector('.paginator');

async function getProductsData(numProductsSkip) {

    products = []
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${numProductsSkip}&select=title,price`)
    const data = await res.json()
    console.log(data);
    products = data.products
    totalPages = (data.total)/10

    // setup of the paginator
    
    let pageId = document.createElement('div')
    pageId.className = 'paginator-id'
    pageId.innerHTML = '◀️'
    pageId.style.border = '1px solid'
    pageId.id = 0
    paginator.appendChild(pageId)

    for(let i=0; i < totalPages; i++) {
        pages.push(i+1)
        let pageId = document.createElement('div')
        pageId.className = 'paginator-id'
        pageId.style.border = '1px solid'
        pageId.innerHTML = i+1
        pageId.id = i
        paginator.appendChild(pageId)
    }

    pageId = document.createElement('div')
    pageId.className = 'paginator-id'
    pageId.style.border = '1px solid'
    pageId.innerHTML = '▶️'
    pageId.id = 0
    paginator.appendChild(pageId)

    //numProductsSkip = numProductsSkip*10 - 10 
    console.log('numProductsSkip', numProductsSkip);

    

    for(let i =0; i< data.products.length; i++) {
        let productItem = document.createElement('div')
        productItem.id = products[i].id
        productItem.className = '.products__list__item'

        let productItemTitle = document.createElement('div')
        productItemTitle.textContent = products[i].title

        let productItemImage = document.createElement('img')
        productItemImage.src = products[i].thumbnail

        productItem.appendChild(productItemTitle)
        productItem.appendChild(productItemImage)

        productItem.style.border = '1px solid'

        productsElement.appendChild(productItem)
    } 

}


getProductsData(0)

paginator.addEventListener('click', (e) => {
    pageNum = e.target.innerHTML
    if (pageNum === '◀️') {
        page = page - 1
        numProductsSkip = ((page-1)*10 - 10).toString() 
    }
    else if (pageNum === '▶️') {
        page = page + 1
        numProductsSkip = ((page+1)*10 - 10).toString() 
    }
    else {
        page = e.target.innerHTML
        numProductsSkip = ((page)*10 - 10).toString() 
    }
    console.log('page', page);
    console.log('numProductsSkip', numProductsSkip);
   
    getProductsData(numProductsSkip)
    productsElement.innerHTML = ''
    paginator.innerHTML = ''
})