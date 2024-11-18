let btNext = document.querySelector('.next')
let btBack = document.querySelector('.back')
let list = document.querySelector('.carrossel-list')

btNext.onclick = () => moveItemsOnClick('next')
btBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(element){

    let listCarrossel = document.querySelectorAll('.carrossel-list-item')

    if(element === 'next'){
        list.append(listCarrossel[0])
    } else{
        list.prepend(listCarrossel[listCarrossel.length -1])
    }
   
}
console.log(btNext)
console.log(btBack)
console.log(list)
