
function clickMe() {
// для поля ввода ФИО
    const string=document.querySelector(".fio1");
    let stringText=string.value;
    let finalText=stringText
        .trim()
        .split(/\s+/)
        .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");

        string.value=finalText;
        document.getElementById('fio2').innerHTML=string.value;


    // для поля ввода картинки
    let k = document.getElementById('ava').value;
    let b = document.querySelector('img');
    b.src;
    b.src = k;
    

}

// Проверка спама (третье поле ввода)
function checkSpam(){

    const kommentInput = document.getElementById('firstKomment').value;
    kommentNew = kommentInput.replace(/VIAGRA/i,"***").replace(/XXX/i,"***");
    document.getElementById('mainkomment').innerHTML=kommentNew; 
}

