 let data=JSON.parse(localStorage.getItem("products"))

//  console.log(Data)

 let i=0;
 data.forEach(function(el){
 let div=document.createElement('div')
 div.setAttribute("id","box")

 let img=document.createElement("img")
 img.src=el.image;
 img.setAttribute("class","img")

 let type=document.createElement("div")
 type.innerText=el.type;

 let desc=document.createElement("div")
 desc.innerText=el.desc;

 let price=document.createElement('div')
 price.innerText=el.price;

 let btn=document.createElement("button")
 btn.innerText='Remove'
 btn.setAttribute("id","remove_product")
 btn.addEventListener("click",function(){
    removedata(el,i)
 })
  div.append(img,type,desc,price,btn)

  document.querySelector("#all_products").append(div)

 })

 function removedata(el,i){
     data.splice(i,1)
     localStorage.setItem("products",JSON.stringify(data))
     location.reload()
 }

 function addmproduct(){
     window.location.href="index.html"
 }

