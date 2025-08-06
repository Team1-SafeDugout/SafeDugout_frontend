const userList = document.getElementById("memberlist-container-ul");
const addbutton = document.getElementsByClassName("memberlist-category-line").item(0);

const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const numberList = document.querySelectorAll("#numberlist-ul>li");

const userNums = 12;
var curPage = 0;

// 숫자 버튼들 세팅
function setNumber() {
  for (var i = 0; i < numberList.length; i++) {
    var curNum = i + (Math.floor((curPage / 5)) * 5);
    numberList.item(i).firstChild.firstChild.nodeValue = curNum + 1;

    if (curPage == curNum) {
      numberList.item(i).style.backgroundColor = "#4D5061";
    }

    else {
      numberList.item(i).style.backgroundColor = "white";
    }

    if (curNum > userNums) {
      numberList.item(i).style.display = "none";
    }
    else {
      numberList.item(i).style.display = "block";
    }
  }
}

function setNumberButton() {
  for (var i = 0; i < numberList.length; i++) {
    numberList.item(i).addEventListener('click', ()=> {
      curPage = i + (Math.floor((curPage / 5)) * 5);
      console.log(i);
      
      setNumber();
    });
  }
}


// leftright button 보이기 말기
function setButton() {
  if (curPage == 0) {
    leftButton.style.display = "none";
  } else {
    leftButton.style.display = "block";
  }

  if (curPage >= userNums) {
    rightButton.style.display = "none";
  } else {
    rightButton.style.display = "block";
  }
}

// 왼쪽 오른쪽 버튼 보이기 말기
leftButton.addEventListener('click', function () {
  if (curPage > 0) {
    curPage--;
    setNumber();
  }
  setButton()
});

// 테스트용 왼쪽 오른쪽 버튼
rightButton.addEventListener('click', function () {
  if (curPage < userNums) {
    curPage++;
    setNumber();
  }
  setButton()
});

// 테스트용 추가 버튼
addbutton.addEventListener('click', function () {

  setNumber();
  const userListNum = document.querySelectorAll("#memberlist-container-ul>li");
  if (userListNum.length >= 10) return;

  const newMember = document.createElement('li');

  const aTag = document.createElement('a');
  const userNumber = document.createElement('div');
  const userID = document.createElement('div');
  const addDate = document.createElement('div');

  const userNumberText = document.createTextNode("userNumber");
  const userIDText = document.createTextNode("userID");
  const addDateText = document.createTextNode("addDate");

  userNumber.appendChild(userNumberText);
  userID.appendChild(userIDText);
  addDate.appendChild(addDateText);

  aTag.appendChild(userNumber);
  aTag.appendChild(userID);
  aTag.appendChild(addDate);
  newMember.appendChild(aTag);

  userList.appendChild(newMember);
});



window.onload = function () {
  setNumberButton();
  setNumber();
  setButton();
};