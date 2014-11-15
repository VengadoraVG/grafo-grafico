window.onload = function () {

    gg.inicializar(); // esto siempre tiene que ir al principio

    gg.ponerNodo(40,40); // este es el nodo 0
    gg.nodos[0].setLabel(":P"); // le puse el texto ":P" al nodo 0

    gg.ponerNodo(200, 40); // este es el nodo 1
    gg.ponerNodo(200, 200); // y este es el nodo 2

    gg.conectar(0,1);
    gg.conectar(1,2);

    gg.dibujarTodo();

    
};
