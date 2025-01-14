
let openshopping=document.querySelector('.shopping')
let closeShopping=document.getElementById("closeCartSidebar")
let listCard=document.querySelector('.listCard')
let offcanvasss=document.querySelector('.offcanavasss')
let total=document.querySelector('.total')
let quantity=document.querySelector('.quantity')
let totalsaving=document.querySelector('.totalsaving')
let quantities=document.querySelector('.quantities')

//cart li
document.addEventListener('DOMContentLoaded',()=>{
  const openCartButton=document.getElementById('openCartSidebar')
  const closeCartButton=document.getElementById('closeCartSidebar')
  const offcanvasss=document.getElementById('offcanvasss')

  openCartButton.addEventListener("click",()=>{
      offcanvasss.classList.add('active')
  })

  closeCartButton.addEventListener("click",()=>{
      offcanvasss.classList.remove('active')
  })
})

let close=document.getElementById('close')
let div=document.querySelector('.div1')
close.addEventListener('click',function(){
    div.style.display='none'
    console.log('hello')
})




//swiper code


        var a=this.window.innerWidth<=768?this.window.innerWidth<426?1:3:5
        var swiper = new Swiper('.swiper', {
            slidesPerView: a,
            direction: getDirection(),
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            on: {
              resize: function () {
                swiper.changeDirection(getDirection());
                slidesPerView:3
              },
            },
          });


  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 1 ? 'vertical' : 'horizontal';

    return direction;
  }
   

let boxss=document.querySelector('.boxss')

let products=[
    {
        id:1,
        image_main:'./soilImage/0625-300x300.jpg',
        image_two:'./soilImage/1080-58-300x300.jpg',
        old_Price:1400,
        new_Price:1200,
        discount_price:30,
    },

    {
        id:2,
        image_main:'./soilImage/kit-01-300x300.jpg',
        image_two:'./soilImage/grand-mom-300x300.jpg',
        old_Price:1000,
        new_Price:800,
        discount_price:25,
    },

    {
        id:3,
        image_main:'./soilImage/hibiscus-shamppo-300x300.jpg',
        image_two:'./soilImage/hibiscus-and-condi-03-1-300x300.jpg',
        old_Price:600,
        new_Price:400,
        discount_price:15,
    },
    
    {
        id:4,
        image_main:'./soilImage/item-2.jpeg',
        image_two:'./soilImage/hair-serum-03-300x300.jpg',
        old_Price:1500,
        new_Price:1200,
        discount_price:30,
    },

    {
        id:5,
        image_main:'./soilImage/0625-300x300.jpg',
        image_two:'./soilImage/1080-58-300x300.jpg',
        old_Price:500,
        new_Price:200,
        discount_price:15,
    },

    {
        id:6,
        image_main:'./soilImage/hair-serum-03-300x300.jpg',
        image_two:'./soilImage/1080-58-300x300.jpg',
        old_Price:1500,
        new_Price:1200,
        discount_price:45,
    },

    {
        id:7,
        image_main:'./soilImage/hibiscus-shamppo-300x300.jpg',
        image_two:'./soilImage/hibiscus-and-condi-03-1-300x300.jpg',
        old_Price:600,
        new_Price:400,
        discount_price:15,
    },
    
    {
        id:8,
        image_main:'./soilImage/item-2.jpeg',
        image_two:'./soilImage/hair-serum-03-300x300.jpg',
        old_Price:1500,
        new_Price:1200,
        discount_price:30,
    },
]
let listCards=[]
function initApp(){
    products.forEach((key,value)=>{
        let newDiv=document.createElement('div')
        newDiv.classList.add('boxx')
        newDiv.classList.add('swiper-slide')

        newDiv.innerHTML=`
            <img src="${key.image_main}"/>
            <img src="${key.image_two}" alt="" class="next-img">
            <div class="icon">
              <p><i class="bi bi-heart"></i></p>
              <p><i class="bi bi-search"></i></p>
              <p><i class="bi bi-shuffle"></i></p>
            </div>
            <div class="discount">
              <span>${key.discount_price}%</span>
            </div>
          </div>
          <div class="txt">
            <p>BEST SELLER HAIRCARE</p>
            <h5>LONH HAIR KIT</h5>
            <span>&#8377;${key.old_Price} - &#8377;${key.new_Price}</span>
          </div>
          <div class="add-card-btn">
            <button class="btn" onclick="addToCart(${value})"> <i class="bi bi-cart2"></i> Add Cart</button>
          </div>
        `
        boxss.appendChild(newDiv)
    })
}initApp()

function addToCart(value){
  console.log("working")
  if(listCards[value]==null){
      listCards[value]={...products[value],quantity:1}
  }
  else{
      listCards[value].quantity+=1
  }
  reloadCart()
}

function reloadCart(){
  listCard.innerHTML=""
  let count=0;
  let totalPrice=0

  listCards.forEach((value,key)=>{
      if(value!=null){
          totalOffer=value.discount_price*value.quantity
          totalPrice+=value.new_Price*value.quantity
          count+=value.quantity
          let newDiv=document.createElement("li")
          newDiv.innerHTML=`
          <div class='d-flex gap-5 mt-5'>
                <img src='${value.image_main}' style=width:50px;/>
                <div>LONH HAIR KIT</div>
                <div>${value.new_Price*value.quantity.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key},
                    ${value.quantity-1})">-</button>
                    <div class='count'>${value.quantity}</div>
                    
                    <button onclick="changeQuantity(${key},
                    ${value.quantity+1})">+</button>
                </div>
          </div>
          
          `
          listCard.appendChild(newDiv)
      }
  })
  total.innerHTML= '&#8377;' +totalPrice.toLocaleString()
  quantity.innerHTML=count;
  totalsaving.innerHTML= '&#8377;' +totalOffer.toLocaleString()
  quantities.innerHTML=count
}
function changeQuantity(key,quantity){
  if(quantity<=0){
      delete listCards[key]
  }
  else{
      listCards[key].quantity=quantity
  }
  reloadCart()
}







document.addEventListener('DOMContentLoaded',()=>{
    let slider=document.getElementById("slider")
    let slides=document.querySelectorAll(".slides")
    let prevArrow=document.getElementById("prevArrow")
    let nextArrow=document.getElementById("nextArrow")

    let currentIndex=0;

    const updateSlider=()=>{
        slider.style.transform=`translateX(-${currentIndex*15}%)`
    }

    prevArrow.addEventListener('click',()=>{
        currentIndex=(currentIndex-1 +slides.length)%slides.length;
        updateSlider()
    })
    nextArrow.addEventListener('click',()=>{
        currentIndex=(currentIndex+1)%slides.length;
        updateSlider()
    })
    
})

const saleEndDate=new Date("2024-12-31T23:59:59").getTime()