//FUNÇÃO A SER EXECUTADA
function consultaCep(){
    //QUANDO O USUARIO CLICAR NO BOTÃO A BARRA VAI APARECER ATE CARREGAR TODA FUNÇÃO
    $(".barra-progresso").show();
    //VARIAVEIS
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep);
    $.ajax({
        //CHAMANDO A VARIAVEL URL
        url: url,
        //METODO POST OU GET
        type: "GET",
        //SE A FUNÇÃO FOR EXECEUTADA COM SUCESSO
        success: function(response){
            console.log(response);
            //CHAMANDO ID DO HTML
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + cep);
            //APRESENTAR O ELEMENTO QUE ESTA ESCONDIDO(LINHAS E ESCRITAS)
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}
//ESCONDE O ELEMENTO INTEIRO (LINHAS E ESCRITAS)
$(function(){
$(".cep").hide();
$(".barra-progresso").hide();
});