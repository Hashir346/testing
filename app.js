// let card = document.getElementById('card')
// let button = document.querySelector('button')
// button.addEventListener('click',async function(){
//     let res = await fetch('https://jsonplaceholder.typicode.com/photos/1')
//     let data = await res.json()
//     let img = document.createElement('img')
//     img.src =data.thumbnailUrl
//     card.appendChild(img)
//     let title = document.createElement('h5')
//     title.innerHTML="hello guys"
//     card.appendChild(title)

// })
// let card = document.getElementById('card')
// let button = document.getElementById('button')
// button.addEventListener('click',async function(){
//     let res = await fetch('https://jsonplaceholder.typicode.com/photos/')
//     let data = await res.json()
//     let img = document.createElement('img')
//     img.src = data.thumbnailUrl
//     card.appendChild(img)
//     let title = document.createElement('h4')
//     title.innerHTML = "hello"
//     card.appendChild(title)

// })
// let card = document.getElementById('card')
// let button = document.getElementById('btn')
// button.addEventListener('click',async function(){
//    try{
//     let res = await fetch('https://jsonplaceholder.typicode.com/photos/1')
//     let data = await res.json()
//     let img = document.createElement('img')
//     img.src = data.thumbnailUrl
//     card.appendChild(img)
//     let title =document.createElement('h5')
//     title.innerHTML= data.title
//     card.appendChild(title)
//    }
//     catch(err){
//     console.log(err)
//    }
// })

const a = [
   {
      id: 1,
      name: 'hashir',
      marks: 30
   },
   {
      id: 2,
      name: 'zain',
      marks: 50
   },
   {
      id: 3,
      name: 'sameer',
      marks: 50
   },
   {
      id: 4,
      name: 'babar',
      marks: 50
   }
]

const arr = a.filter(function(val){
   return val.id === 2;
})

console.log(arr)

