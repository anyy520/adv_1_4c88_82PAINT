//Mantivemos seu valor vazio porque, quando a página carrega, nenhum evento
//de mouse ocorre.A var atualiza de acordo com o evento
var mouseEvent = "empty";

//Agora, declaramos duas variáveis para armazenar as últimas coordenadas "x" e "y"
//do mouse.Será usada para fins do desenho
var lastPositionOfX, lastPositionOfY;


// Vamos pegar o canvas e fazer a referência dele como fizemos na aula anterior.
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

//duas variáveis: uma com a cor (color) e a segunda com a largura
//(width). Essas variáveis serão usadas para desenhar.
    color = "black";
    widthOfLine = 1;

// //significa o evento da função.■ Essa e possui relação com o evento.
//Por exemplo: se o evento for mousedown, então essa e possui
//uma relação com o evento mousedown.
    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional

        mouseEvent = "mousedown";
    }
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseup";
    }
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
         //A e.clientX dará a coordenada x do cursor no canvas quando clicada.
         //○ Como o canvas pode ser colocado em qualquer lugar da tela, a
         //e.clientX não dará a coordenada x real no canvas. Portanto, para obter
        //a coordenada x real no canvas em relação à tela quando clicada,fazemos:e.clientX - canvas.offsetLeft.
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;//Após obter a coordenada y,
          //  iremos armazená-la em uma variável chamada   currentPositionOfMouseY 
        
    if (mouseEvent == "mousedown") {//verificar se o evento mouseDown
         ctx.beginPath();     //inicia um caminho ou redefine o caminho atual para
                              //desenhar qualquer coisa. Diz ao canvas para começar a
                             //desenhar a forma/objeto.
        
      ctx.strokeStyle = color;//define a cor do desenho. Criamos o valor para avariável color, cuja cor é
       // preta, de modo que o desenho será preto.
       ctx.lineWidth = widthOfLine;//define a largura do desenho. Definimos o valor para a variável widthOfLine,
        //cujo valor é 2, portanto a largura (width)do desenho será 2.
        
     //Agora vamos passar esta lastPositionX e a lastPositionY dentro da função moveTo.
        console.log("Ultima posicao das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);//move to x,y ..move um ponto para outro ponto
        // Então, quando passamos a última coordenada x e y para a função moveTo,
        // significa que a criação da linha deve começar a partir dessas coordenadas

        console.log("Posicao atual das coordenadas x e y = ");// passando as posições atuais,significa que a criação 
        //da linha deve terminar nessas coordenada
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);//acrescenta um novo ponto e cria uma linha para
        //  esse ponto a partir do último ponto especificado, que discutimos em
       //moveTo() no canvas
        ctx.stroke();//desenhar uma linha usando a função stroke().
        }
        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
    }
//Resumindo, moveTo() iniciará a linha e lineTo() terminará a linha.
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
