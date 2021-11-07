package java.PatronesDiseno.Ejemplo1Buider.Menus;

import java.PatronesDiseno.Ejemplo1Buider.components.Entrada;
import java.PatronesDiseno.Ejemplo1Buider.components.PlatoPrincipal;
import java.PatronesDiseno.Ejemplo1Buider.components.Postre;

// CLASE PRODUCTO: crear un objeto con muchas opciones posibles de configuración.
public class Menu {
    private  final Entrada entrada;
    private  final PlatoPrincipal platoPrincipal;
    private  final Postre postre;
    private  final TipoMenu tipoMenu;


    public Menu( TipoMenu tipoMenu, Entrada entrada, PlatoPrincipal platoPrincipal, Postre postre){
        
        this.tipoMenu = tipoMenu;
        this.entrada =entrada;
        this.platoPrincipal =platoPrincipal;
        this.postre = postre;
        

    }

    //Con los métodos SETS se asignan valores a los atributos.


    public Entrada getEntrada() {
        return this.entrada;
    }


    public PlatoPrincipal getPlatoPrincipal() {
        return this.platoPrincipal;
    }


    public Postre getPostre() {
        return this.postre;
    }


    public TipoMenu getTipoMenu() {
        return this.tipoMenu;
    }

   
    
}
