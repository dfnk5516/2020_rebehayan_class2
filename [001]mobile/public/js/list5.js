const prices = document.querySelectorAll('.p-price');

prices.forEach(item=>{
  item.innerText = numberWithCommas(item.innerText);
})

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}