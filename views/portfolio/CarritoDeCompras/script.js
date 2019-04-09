 //STYLES
    //--variables
    const btnShop = document.querySelector("#btn-shop")
    //--functions
    btnShop.onmouseover = function(){
      btnShop.children[0].style.color="grey"
    }
    btnShop.onmouseleave=function(){
      btnShop.children[0].style.color="white"
    }
//-------------------------------------------------------------------
    //LOGIC
    //--variables
    const housesList = document.querySelector("#houses-container")
    const cartShopList = document.querySelector("table tbody")
    const btnRemoveAll = document.querySelector("#btnRemoveAll")
    //--EventListeners
    document.addEventListener("DOMContentLoaded", readyOnStorage)
    //--functions
    housesList.onclick=function(e){
      e.preventDefault()
      if(e.target.classList.contains("btnBuy")){
        const house = e.target.parentElement.parentElement;
        readHouseData(house)
      }
    }
    cartShopList.onclick=function(e){ //remove items from localStorage and cartShopList
      e.preventDefault();
      let house = e.target.parentElement.parentElement
      let houseID = house.querySelector("a").getAttribute("data-id")
      let houseLS = getItemsLocalStorage()
      if(e.target.classList.contains("remove-cart-item")){
        house.remove();
        houseLS.forEach(index =>{
          if(houseID === index.id){
            houseLS.splice(index, 1)
          }
        });
        localStorage.setItem("houses", JSON.stringify(houseLS))
      }
    }
    btnRemoveAll.onclick=function(e){//remove all content of cart list
      if(e.target.classList.contains("removeAll")){
        while(cartShopList.firstChild){
          cartShopList.removeChild(cartShopList.firstChild)
        }
        localStorage.clear()
      }
    }
    function readHouseData(house){ //get info of a selected house
        const houseInfo = {
            id: house.querySelector("a").getAttribute("data-id"),
            imagen: house.querySelector("img").src,
            titulo: house.querySelector("h4").textContent,
            precio: house.querySelector("h5").textContent,
        }
        setInShopCart(houseInfo)
    }

    function setInShopCart(house){//show the selected houses in the cart list
        let fragment = document.createDocumentFragment();
        const row = document.createElement("tr");
        row.innerHTML= `
         <td><img class="w-75" src="${house.imagen}" ></td>
         <td class="w-25">${house.titulo}</td> 
         <td class="w-25">${house.precio}</td> 
         <td><a href="#!" class="btn btn-danger p-2 remove-cart-item" data-id="${house.id}"></a></td> 
        `;
        fragment.appendChild(row)
        cartShopList.appendChild(fragment)  
        setItemsLocalStorage(house) 
    }
    function readyOnStorage(){//set items into localStorage and then show them 
      let houses
      houses = getItemsLocalStorage()
      houses.forEach(house => {
        let fragment = document.createDocumentFragment();
        const row = document.createElement("tr");
        row.innerHTML= `
         <td><img class="w-75" src="${house.imagen}" ></td>
         <td class="w-25">${house.titulo}</td> 
         <td class="w-25">${house.precio}</td> 
         <td><a href="#!" class="btn btn-danger p-2 remove-cart-item" data-id="${house.id}"></a></td> 
        `;
        fragment.appendChild(row)
        cartShopList.appendChild(fragment) 
      });
      
    }
    function setItemsLocalStorage(house){//this explains itself
      let houses;
      houses = getItemsLocalStorage();
      houses.push(house)
      localStorage.setItem("houses",JSON.stringify(houses))
    }
    function getItemsLocalStorage(){//return the string with LS content
      let houses;
      if(localStorage.getItem("houses")===null){
        houses = []
      }else{
        houses = JSON.parse(localStorage.getItem("houses"))
      }
      return houses;
    }