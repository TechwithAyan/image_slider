let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click',function(){
    let items = document.querySelectorAll('.item') /*let items = document.querySelectorAll('.item'): Selects all elements with the class .item (these are the items in the slider, such as images or content blocks) and stores them in the items variable as a NodeList.*/
    document.querySelector('.slide').appendChild(items[0]) /*document.querySelector('.slide').appendChild(items[0]): Moves the first item (items[0]) to the end of the .slide container. This shifts the rest of the items forward by one position.*/
})
prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) /*Moves the last item (items[items.length - 1]) to the beginning of the .slide container. This shifts the rest of the items backward by one position.*/
})