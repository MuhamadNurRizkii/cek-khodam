document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

// item penting
const inputName = document.getElementById("inputName");
const button = document.getElementById("btn");
const table = document.getElementById("table");

// khodam
const khodam = [
  "botol aqua",
  "Harimau",
  "kudanil",
  "tuyul",
  "Ayam",
  "siput",
  "tutup panci",
  "Jarjit",
  "ikan mujair",
];

// fungsi ketika button di klik
function addKhodam() {
  // input name
  const name = inputName.value.trim();
  if (name === "") {
    alert("nama tidak boleh kosong!!");
    return;
  }
  // membuat tr
  const tr = document.createElement("tr");
  const number = Math.floor(Math.random() * khodam.length);
  let no = document.querySelectorAll("tr").length;

  //   membuat td nomor,nama,khodam
  const tdNumber = document.createElement("td");
  const tdName = document.createElement("td");
  const tdKhodam = document.createElement("td");

  //   memasukan content ke setia td
  tdNumber.textContent = no++;
  tdName.textContent = name;
  tdKhodam.textContent = khodam[number];

  //   menambahkan td ke tr
  tr.appendChild(tdNumber);
  tr.appendChild(tdName);
  tr.appendChild(tdKhodam);

  tdNumber.classList.add("border", "border-gray-400", "px-4", "py-2");
  tdName.classList.add("border", "border-gray-400", "px-4", "py-2");
  tdKhodam.classList.add("border", "border-gray-400", "px-4", "py-2");

  table.appendChild(tr);

  //   mengosongkan input setelah menambahkan data
  inputName.value = "";
  saveToLocalStorage();
}

// fungsi menyimpan ke localstorage
function saveToLocalStorage() {
  const rows = document.querySelectorAll("#table tr");
  let data = [];

  rows.forEach((row) => {
    const columns = row.querySelectorAll("td");
    data.push({
      no: columns[0].textContent,
      name: columns[1].textContent,
      khodam: columns[2].textContent,
    });
  });

  localStorage.setItem("khodamData", JSON.stringify(data));
}

// fungsi load data localStorage
function loadFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("khodamData")) || [];
  data.forEach((item) => {
    const tr = document.createElement("tr");

    //   membuat td nomor,nama,khodam
    const tdNumber = document.createElement("td");
    const tdName = document.createElement("td");
    const tdKhodam = document.createElement("td");

    //   memasukan content ke setia td
    tdNumber.textContent = item.no;
    tdName.textContent = item.name;
    tdKhodam.textContent = item.khodam;

    //   menambahkan td ke tr
    tr.appendChild(tdNumber);
    tr.appendChild(tdName);
    tr.appendChild(tdKhodam);

    tdNumber.classList.add("border", "border-gray-400", "px-4", "py-2");
    tdName.classList.add("border", "border-gray-400", "px-4", "py-2");
    tdKhodam.classList.add("border", "border-gray-400", "px-4", "py-2");

    table.appendChild(tr);
  });
}

button.addEventListener("click", addKhodam);
inputName.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addKhodam();
  }
});
