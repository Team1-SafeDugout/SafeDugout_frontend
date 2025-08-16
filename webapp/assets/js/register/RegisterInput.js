// 버튼
const checkDuplicate = document.querySelector('li:nth-child(2) button');
const sendCode = document.querySelector('li:nth-child(5) button');
const authenticate = document.querySelector('li:nth-child(6) button');
const findPostalCode = document.querySelector('li:nth-child(8) button');
const registerBtn = document.querySelector('.main-login-button');

// 입력값
const id = document.getElementById("id");
const pw = document.getElementById("pw");
const postalCode = document.getElementById("postalCode");
const detailAddress = document.getElementById("detailAddress")

// 입력 오류 메시지
const inputMissingMessage = document.querySelectorAll(".main-input-error-message span:nth-child(1)");
const duplicateMessage = document.querySelector('li:nth-child(2) span:last-child');
const invalidPassowrdMessage = document.querySelector('li:nth-child(3) span:last-child');
const passwordMismatchMessage = document.querySelector('li:nth-child(4) span')
const codeMismatchMessage = document.querySelector('li:nth-child(6) span:first-child')
const requiredMessage = document.querySelector('li:nth-child(6) span:last-child');
const invalidEmail = document.querySelector('li:nth-child(7) span:last-child');

// 이벤트리스너
checkDuplicate





registerBtn.addEventListener('click', function () {

  if (id.value === "" || pw.value === "") {
    loginErrorMessage.style.visibility = "visible";
  }

  else {

    if (id.value === "user1234" && pw.value === "1234") {
      loginErrorMessage.style.visibility = "hidden";
      location.href = "./../../mainLogin.html";
    }

    else {
      loginErrorMessage.style.visibility = "visible";
    }
  }
});

postalCode.addEventListener('input', function () {
  if (postalCode.value != "") {
    detailAddress.style.placeholder = "상세 주소 입력"
    detailAddress.readonly = false;
    detailAddress.style.pointerEvents = "auto";
  }
  if (postalCode.value === "") {
    detailAddress.style.placeholder = undefined;
    detailAddress.readonly = true;
    detailAddress.style.pointerEvents = "none";
  }
});



