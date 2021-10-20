var img10 = new Image();
img10.src = "10.png";
let img11 = new Image();
img11.src = "11.png";
let img12 = new Image();
img12.src = "12.png";
let img13 = new Image();
img13.src = "13.png";
let img14 = new Image();
img14.src = "14.png";
let quest = [img10, img11, img12, img13, img14];
let right_answer = [a5, a4, a3, a1, a5]
let num_img = 0;
let num_ans = 0;
let sum = 0;
document.body.appendChild(quest[num_img]);
btn.addEventListener("click", fnc);
        function fnc(){
            document.body.removeChild(quest[num_img]);
            num_img++;
            document.body.appendChild(quest[num_img]);
        }
btn.addEventListener("click", fnc1);
function fnc1(){
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    console.log(a4.checked);
    console.log(a5.checked);
    if (right_answer[num_ans].checked){
        alert("Правильный ответ");
        sum++;
    } else {
        alert("Не правильный ответ");
    }
    num_ans++;
if (num_ans == right_answer.length){
    document.body.remove(tab);
    alert("Всего баллов:" + sum);
}
}