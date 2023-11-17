


function closeProductDetails() {
    const detailPage = document.getElementById('productDetails')
    detailPage.style = 'display:none'
}


function addtocartproduct() {

    const allCartsUl = document.createElement('UL')
    const allCartIsHere = document.getElementById('allCartIsHere')
    allCartsUl.setAttribute('id','allCartsUl')
    allCartIsHere.appendChild(allCartsUl)

    const productImgLi=document.createElement('LI')
    productImgLi.setAttribute('id','productImgLi')
        const imageContainer = document.getElementById('detailImgSec')
        const imageHtml=imageContainer.innerHTML
        productImgLi.innerHTML=imageHtml

    const brandNameLi=document.createElement('LI')
    const detailBrandName = document.getElementById('detailBrandName').innerHTML
    brandNameLi.innerHTML=detailBrandName

    const productNameLi=document.createElement('LI')
    productNameLi.setAttribute('id','productNameLi')
    const detailProductName = document.getElementById('detailProductName').innerHTML
    productNameLi.innerHTML=detailProductName

    const brandNameAndProductLi=document.createElement('LI')
    brandNameAndProductLi.appendChild(brandNameLi)
    brandNameAndProductLi.appendChild(productNameLi)

    const productPriceLi=document.createElement('LI')
    const productDetailDiscountPrice=document.getElementById('productDetailDiscountPrice').innerHTML
    productPriceLi.innerHTML=productDetailDiscountPrice

    const span1=document.createElement('span')
    span1.innerHTML="\u00d7"
   

    allCartsUl.appendChild(productImgLi)
    allCartsUl.appendChild(brandNameAndProductLi)
    allCartsUl.appendChild(productPriceLi)
    allCartsUl.appendChild(span1)

    saveData()
    showData()

    const cartSecTotal=document.getElementById('cartSecTotal')
    const totalPrice=document.getElementById('totalPrice')

}

allCartIsHere.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    }
    saveData()
    showData()
 })

  function saveData(){
        localStorage.setItem('data',allCartIsHere.innerHTML)
    }

    function showData(){
        allCartIsHere.innerHTML=localStorage.getItem('data')
    }

    showData()

    function clickForCompeletBooking(){
        window.location.href='login.html'
    }

    function checkData(){
        alert('Order Place Successfully')
        window.location.href='index.html'
    }
























