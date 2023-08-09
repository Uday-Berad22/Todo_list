let add = document.getElementById("add");
let edit = document.getElementById("edit");
let itemJsonArrayStr = localStorage.getItem("itemsJson");
let itemJsonArray = JSON.parse(itemJsonArrayStr);
let tableBody = document.getElementById("tableBody");
let str = "";
update(0);
function update(a1) {
  if (a1 == 1) {
    let itemJsonArray;
    let tit = document.getElementById("Title").value;
    let desc = document.getElementById("Description").value;
    console.log("Updating List");
    if (localStorage.getItem("itemsJson") == null) {
      let itemJsonArray = [];
      if(tit!=""&&desc!="")
      itemJsonArray.push([tit, desc]);
      localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    } else {
      let itemJsonArrayStr = localStorage.getItem("itemsJson");
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      if(tit!=""&&desc!="")
      itemJsonArray.push([tit, desc]);
      localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    }
    tableBody = document.getElementById("tableBody");
    str = "";
    if (itemJsonArray != null) {
      itemJsonArray.forEach((element, index) => {
        str =
          str +
          `<tr id="trow">
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-primary  btn-sm" id="edit" onclick="Edit(${index})" >Edit</button></td>
                    <td><button class="btn btn-primary  btn-sm" id="edit" onclick="Delete(${index})">Delete</button></td>
                  </tr>`;
      });
    }
    
    tableBody.innerHTML = str;
  } 
  else {
    let str = "";
    if (itemJsonArray != null) {
      itemJsonArray.forEach((element, index) => {
        str =
          str +
          `<tr id="trow">
                          <th scope="row">${index + 1}</th>
                          <td>${element[0]}</td>
                          <td>${element[1]}</td>
                          <td><button class="btn btn-primary  btn-sm" id="edit" onclick="Edit(${index})" >Edit</button></td>
                          <td><button class="btn btn-primary  btn-sm" onclick="Delete(${index})">Delete</button></td>
                        </tr>`;
      });
    }
    tableBody.innerHTML = str;
  }
}

add.addEventListener("click", () => {
  update(1);
});
function Delete(itemindex) {
  console.log("Delete", itemindex + 1);
  let itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  //Delete itemindex from the array
  itemJsonArray.splice(itemindex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update(0);
  Swal.fire({
    icon: 'success',
    title: 'Successfully Deleted'
  })
}
function Clear() {
  if (confirm("Do you really want to clear ?")) {
    console.log("clearing the storage");
    localStorage.clear();
    update(0);
  }
}


//Sweat JS
add=document.getElementById("add");
add.addEventListener("click",()=>{
    let tit = document.getElementById("Title").value;
    let desc = document.getElementById("Description").value;
    if(tit==""&&desc==""){
        Swal.fire({
            icon: 'error',
            title: 'Please Enter Title and Decription'
          })
    }
    else  if(desc==""){
        Swal.fire({
            icon: 'error',
            title: 'Please Enter  Decription'
          })
    }
    else if(tit==""){
        Swal.fire({
            icon: 'error',
            title: 'Please Enter Title '
          })
    }
    else{
    Swal.fire({
        icon: 'success',
        title: 'Successfully Added'
      })
      document.getElementById("Title").value="";
      document.getElementById("Description").value="";
    }
})