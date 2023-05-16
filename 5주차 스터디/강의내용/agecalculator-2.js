let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

const today = new Date();
console.log(today);

function calculateAge() {   

     let birthDate = new Date(el.value);   
    //  괄호하고 아무것도 안쓰면 투데이, 밸류라고 쓰면 생년월일을 변환해서 사용가능

    let age; 

    if(today.getMonth() > birthDate.getMonth() || 
     (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate()
        )
    ) {
        age = today.getFullYear() - birthDate.getFullYear();
    } else {
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    }
    
    elResult.innerText = `귀하의 만 나이는 ${age} 입니다 `;

    return age;
}

elSubmit.addEventListener('click', calculateAge);
