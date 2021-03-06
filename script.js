$(document).ready(function() {

    //verificar se o cpf e valido
    jQuery.validator.addMethod("cpf", function (value, element) {
    
    value = jQuery.trim(value);

    value = value.replace('.', '');
    value = value.replace('.', '');
    cpf = value.replace('-', '');
    
    while (cpf.length < 11) 
        cpf = "0" + cpf;

    var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
    
    var a = [];
    var b = new Number;
    var c = 11;

    for (i = 0; i < 11; i++) {
        a[i] = cpf.charAt(i);
        if (i < 9) b += (a[i] * --c);
    }

    if ((x = b % 11) < 2) { 
        a[9] = 0 
    } else { 
        a[9] = 11 - x 
    }
    
    b = 0;
    c = 11;

    for (y = 0; y < 10; y++) b += (a[y] * c--);
    
    if ((x = b % 11) < 2) {
        a[10] = 0; 
    } else { 
        a[10] = 11 - x; 
    }
    
    if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)) return this.optional(element) || false;
    
    return this.optional(element) || true;

}, "Informe um CPF válido.");

    //Verificar se a data e valida
    jQuery.validator.addMethod("validarData", function(data) {
            dataAtual= new Date();
            data=new Date(data);

            if (data<dataAtual){
                return true;
            } else {
               return false;
            }
    }, "Insira uma data valida");

    //Botao Cancelar
    $("#apagar").click(function(form){
         $("#form")[0].reset()
    });

    //Mascara para cpf
    $('.cpf').mask('000.000.000-00', {reverse: true});


});

//Validacao todos os campos
$(document).ready(function() {

    $( "#form" ).validate({
        debug: true,
        rules: {
            nome: {
                required: true
            },
            cpf: {
                cpf: true,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            data: {
                required: true,
                validarData: true
            },
            senha: {
                required: true,

            },
            senha2: {
                required: true,
                equalTo: "#senha"
            },
            sexo: {
                required: true
            }
        },

        //Erro radio
        errorPlacement: function(error, element) {
            if ( element.is(":radio") ) {
                error.appendTo( element.parents('fieldset') );
            }
            else {
                error.insertAfter( element );
            }
        }



    });

    //Botao cadastras
    var form = $("#form")
    form.validate()
    $( ".submit" ).click(function() {
        if (form.valid() == true) {
            alert( "Cadastrado com sucesso! ");
        }
        
    });
});


   



   
        











    









// Traducao para portugues
jQuery.extend(jQuery.validator.messages, {
    required: "Este campo &eacute; requerido.",
    remote: "Por favor, corrija este campo.",
    email: "Por favor, forne&ccedil;a um endere&ccedil;o eletr&ocirc;nico v&aacute;lido.",
    url: "Por favor, forne&ccedil;a uma URL v&aacute;lida.",
    date: "Por favor, forne&ccedil;a uma data v&aacute;lida.",
    dateISO: "Por favor, forne&ccedil;a uma data v&aacute;lida (ISO).",
    number: "Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lido.",
    digits: "Por favor, forne&ccedil;a somente d&iacute;gitos.",
    creditcard: "Por favor, forne&ccedil;a um cart&atilde;o de cr&eacute;dito v&aacute;lido.",
    equalTo: "Por favor, forne&ccedil;a o mesmo valor novamente.",
    accept: "Por favor, forne&ccedil;a um valor com uma extens&atilde;o v&aacute;lida.",
    maxlength: jQuery.validator.format("Por favor, forne&ccedil;a n&atilde;o mais que {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, forne&ccedil;a ao menos {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1} caracteres de comprimento."),
    range: jQuery.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1}."),
    max: jQuery.validator.format("Por favor, forne&ccedil;a um valor menor ou igual a {0}."),
    min: jQuery.validator.format("Por favor, forne&ccedil;a um valor maior ou igual a {0}.")
});
