//store the products array in localstorage as "products"

document.querySelector('form').addEventListener("submit",addproduct)

let arr=JSON.parse(localStorage.getItem("products"))||[]
function addproduct(){
  event.preventDefault()
    let obj={

          type:document.querySelector("#type").value ,
         desc:document.getElementById("desc").value ,
         price:document.getElementById("price").value,
        image:document.getElementById("image").value
    }
    arr.push(obj)
    location.reload()


//  console.log(arr)
localStorage.setItem("products",JSON.stringify(arr))

}

function showproduct(){
    window.location.href="inventory.html"
}