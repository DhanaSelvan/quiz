
const check = (option) => {
    console.log(option)
    const allOption = document.querySelectorAll('.choice');
    const optionA = document.querySelector('.choice1');
    const optionB = document.querySelector('.choice2');
    const optionC = document.querySelector('.choice3');
    const optionD = document.querySelector('.choice4');

    if (option===1){
        optionB.style.background = 'green';
        optionB.style.color = 'white';
    } else {
        optionA.style = 'background-color: red; color: white';
        optionD.style = 'background-color: red; color: white';
        optionC.style = 'background-color: red; color: white';
        optionB.style = 'background-color: green; color: white';
    }
}

const check2 = (option) => {
    console.log(option)
    const allOption = document.querySelectorAll('.choice');
    const optionA = document.querySelector('.choice5');
    const optionB = document.querySelector('.choice6');
    const optionC = document.querySelector('.choice7');
    const optionD = document.querySelector('.choice8');

    if (option===1){
        optionA.style.background = 'green';
        optionA.style.color = 'white';
    } else {
        optionB.style.background = 'background-color: red; color: white';
        optionD.style.background = 'background-color: red; color: white';
        optionC.style.background = 'background-color: red; color: white';
        optionA.style.background = 'background-color: green; color: white';
    }
}