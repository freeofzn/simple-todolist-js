var inputTitle = document.createElement("input");
inputTitle.setAttribute("name", "my-input");
inputTitle.setAttribute("placeholder", "제목을 입력해 주세요");

var btnAdd = document.createElement("button");
btnAdd.setAttribute("name", "my-btn");
btnAdd.textContent = "등록";
btnAdd.addEventListener("click", handleClickAdd);

var btnSave = document.createElement("button");
btnSave.textContent = "저장";
btnSave.addEventListener("click", handleClickSave);

var divTable = document.createElement("div");
divTable.setAttribute("name", "div-table");

const root = document.querySelector("#root");
root.appendChild(inputTitle);
root.appendChild(btnAdd);
root.appendChild(btnSave);
root.appendChild(divTable);

// 등록클릭
function handleClickAdd(ev) {
  var myInput = document.querySelector('[name="my-input"]');
  if (myInput.value.trim() === "" || myInput.value.trim() == null) {
    alert("제목을 입력해 주세요.");
    myInput.focus();
    return;
  }

  var divRow = document.createElement("div");

  var spanTitle = document.createElement("span");
  spanTitle.innerHTML = myInput.value;
  myInput.value = "";
  spanTitle.setAttribute("style", "display:inline-block; width:300px;");

  var spanClose = document.createElement("span");
  spanClose.innerHTML = "X";
  spanClose.addEventListener("click", function (ev) {
    document.querySelector('[name="div-table"]').removeChild(this.parentElement);
  });

  divRow.appendChild(spanTitle);
  divRow.appendChild(spanClose);
  document.querySelector('[name="div-table"]').appendChild(divRow);
  myInput.focus();
}

// 저장클릭
function handleClickSave(ev) {
  const saveArr = [];
  var divSaveList = document.querySelector('[name="div-table"]').children;
  for (let i = 0; i < divSaveList.length; i++) {
    saveArr.push({ title: divSaveList[i].children[0].innerHTML });
  }

  alert("저장목록 JSON: " + JSON.stringify({ TODOLIST: saveArr }));
}
