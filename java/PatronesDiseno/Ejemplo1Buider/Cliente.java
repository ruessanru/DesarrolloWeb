package java.PatronesDiseno.Ejemplo1Buider;

import java.PatronesDiseno.Ejemplo1Buider.Director.Director;
import java.PatronesDiseno.Ejemplo1Buider.Builders.MenuBuilder;
import java.PatronesDiseno.Ejemplo1Buider.Menus.Menu;



public class Cliente {
    public static void main(String[] args) {
        Director director = new Director();

        
        MenuBuilder menuBuilder = new MenuBuilder();
        director.constructMenuTipo1(menuBuilder);

        
        Menu menu = menuBuilder.getResult();
        System.out.println("Menú Construido:\n" + menu.getTipoMenu());

}
}