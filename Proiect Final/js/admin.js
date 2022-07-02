let state = {
  list: [],
  idxEdit: null,
  databaseUrl:
    "https://magazinonline-4e4cd-default-rtdb.europe-west1.firebasedatabase.app/",
};

function validateForm() {
  var x = document.forms["form"]["nume"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  return true;
}
 function draw() {
  let table = document.querySelector("#list tbody");
  let str = "";

  for (let [i, elem] of Object.entries(state.list)) {
    // for (let i = 0; i < state.list.length; i++) {
    //   let elem = state.list[i];
    if (elem === null) {
      continue;
    }

    str += `
        <tr>
                <td>${elem.name}</td>
                <td>${elem.id}</td>
                <td><img src=${elem.image} alt="" width="200" height="200"></td>
                <td>${elem.price}</td>
                <td>${elem.quantity}</td>
                <td>${elem.category}</td>
                <td><button  onclick="del('${i}')">Delete</button></td>
                <td><button  onclick="edit('${i}')">Edit</button></td>
                
            </tr>
            `;
  }

  table.innerHTML = str;
  showTable();
}
function edit(idx) {
  showForm();
  let elem = state.list[idx];
  document.querySelector("[name='nume']").value = elem.name;
  document.querySelector("[name='id']").value = elem.id;
  document.querySelector("[name='imagine']").value = elem.image;
  document.querySelector("[name='pret']").value = elem.pret;
  document.querySelector("[name='cantitate']").value = elem.quantity;
  document.querySelector("[name='categorie']").value = elem.category;
  state.idxEdit = idx;
}
async function del(idx) {
  if (
    confirm(`Esti sigur ca vrei sa stergi produsul: ${state.list[idx].name}?`)
  ) {
    // state.list.splice(idx, 1);
    let url = state.databaseUrl + idx + "/" + ".json";
    let response = await fetch(url, {
      method: "DELETE",
    });
    await getData();
  }
}

async function adauga(event) {
  event.preventDefault();
  let name = document.querySelector("[name='nume']").value.trim();
  let id = document.querySelector("[name='id']").value.trim();
  let image = document.querySelector("[name='imagine']").value.trim();
  let price = document.querySelector("[name='pret']").value.trim();
  let quantity = document.querySelector("[name='cantitate']").value.trim();
  let category = document.querySelector("[name='categorie']").value.trim();
  if (state.idxEdit === null) {
    let url = state.databaseUrl + ".json";
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        id: id,
        image: image,
        price: price,
        quantity: quantity,
        category: category,
      }),
    });
  } else {
    let response = await fetch(
      state.databaseUrl + state.idxEdit + "/" + ".json",
      {
        method: "PUT",
        body: JSON.stringify({
          name: name,
          id: id,
          image: image,
          price: price,
          quantity: quantity,
          category: category,
        }),
      }
    );
    state.idxEdit = null;
  }

  document.querySelector("form").reset();
  await getData();
}

function showTable() {
  document.querySelector("#list").classList.remove("hidden");
  document.querySelector("#form").classList.add("hidden");
}
function showForm() {
  document.querySelector("#form").reset();
  state.idxEdit = null;
  document.querySelector("#list").classList.add("hidden");
  document.querySelector("#form").classList.remove("hidden");
}
async function getData() {
  let url = state.databaseUrl + ".json";
  let response = await fetch(url);
  let list = await response.json();
  state.list = list;
  draw();
}
