function inicializa(){
    document.getElementsByName('txtLogin')[0].focus()

}

// OUVINDO EVENTO 
var form = document.getElementsByName('formLogin')[0]
form.addEventListener("submit", logar)


function logar(e){
    e.preventDefault()

    console.log(document.getElementsByName('txtSenha')[0].value)

    /*
        // Limpar campo de texto 
        document.getElementsByName('txtLogin')[0].value = ""
        document.getElementsByName('txtSenha')[0].value = ""
    */

    // variavel login
    var txtLogin = document.getElementsByName('txtLogin')[0].value
    console.log(txtLogin)

    // mostrar usuario
    document.querySelector('header div').style.display = "block"
    document.querySelector('div span').innerHTML = txtLogin
    //document.queryselector('div span').innerText = document.getElementsByName('txtLogin')[0].value

    // oculta formulario 
    form.style.display = "none"

}

var selectMode = document.getElementsByName('selectMode')[0]
selectMode.addEventListener('change', function(){
    //console.log('Teste select' + selectMode.value)


    /*
            --color0: #2f3e46;
            --color1: #354f52;
            --color2: #52796f;
            --color3: #84a98c;
            --color4: #cad2c5;
            --color5: black;
            --color6: white;
    */ 


    if(selectMode.value == 1){
        document.body.style.setProperty('--color2', '#354f52')
        document.body.style.setProperty('--color3', '#84a98c')
    }else{
        document.body.style.setProperty('--color2', '#2f3e46')
        document.body.style.setProperty('--color3', '#354f52')
    }
})


//alterar cor
var txtCor = document.getElementsByName('txtColor')[0]
txtCor.addEventListener('change', function(){
    console.log(txtCor.value)

    document.body.style.backgroundColor = txtCor.value
})
