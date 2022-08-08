// let salePrice = document.querySelector('.sale.product');
// let originalPrice = document.querySelector('.original.product');
// // var discountPercentage = salePrice * originalPrice;
// document.querySelector('.discount-percentage').innerHTML = salePrice * originalPrice;
const navTitles = document.querySelector('.nav-titles');
const navTitlesHeight = document.querySelector('.nav-titles-height');

$('.nav-toggle').click(function(event) {
    $('.nav-titles').toggleClass('activate');
    if(navTitles.classList.contains('activate')){
        navTitles.style.height = navTitlesHeight.offsetHeight+"px";
    } else {
        navTitles.style.height = "0px";
    }
});

// for subnavigation menu
const ulSubMenu = document.querySelector('.menu-item-has-children .child-container ul.child');
const subMenu = document.querySelector('.menu-item-has-children .child-container');
$(document).ready(function(){
    $(".menu-item-has-children").hover(function(){
        $('.menu-item-has-children .child-container').toggleClass('activate');
        if(subMenu.classList.contains('activate')){
            subMenu.style.height = ulSubMenu.offsetHeight+"px";
        } else {
            subMenu.style.height = "0px";
        }
    });
  });

  window.onload = function(e){ 
    document.querySelector('.hero-img').classList.add('normal');
    // document.querySelector('.img-loader').classList.add('normal');
  }