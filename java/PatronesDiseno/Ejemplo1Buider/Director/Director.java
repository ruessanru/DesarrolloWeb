package java.PatronesDiseno.Ejemplo1Buider.Director;

import java.PatronesDiseno.Ejemplo1Buider.components.Entrada;
import java.PatronesDiseno.Ejemplo1Buider.components.PlatoPrincipal;
import java.PatronesDiseno.Ejemplo1Buider.components.Postre;
import java.PatronesDiseno.Ejemplo1Buider.Builders.Builder;
import java.PatronesDiseno.Ejemplo1Buider.Menus.TipoMenu;

public class Director {

    public void constructMenuTipo1(Builder menuBuilder){
        menuBuilder.setTipoMenu(TipoMenu.MENU_TIPO_1);
        menuBuilder.setEntrada(Entrada.ENSALADA_ESPINACAS);
        menuBuilder.setPlatoPrincipal(PlatoPrincipal.PASTEL_ESPINACAS_CON_PAPA);
        menuBuilder.setPostre(Postre.BUÑUELOS_DE_PERA);
    }
    public void constructMenuTipo2(Builder menuBuilder){
        menuBuilder.setTipoMenu(TipoMenu.MENU_TIPO_2);
        menuBuilder.setEntrada(Entrada.SOPA_CALABAZA);
        menuBuilder.setPlatoPrincipal(PlatoPrincipal.BRANDADA_DE_PESCADO);
        menuBuilder.setPostre(Postre.CREPAS_DE_CHOCOLATE);
    }
    public void constructMenuTipo3(Builder menuBuilder){
        menuBuilder.setTipoMenu(TipoMenu.MENU_TIPO_N);
        menuBuilder.setEntrada(Entrada.ENTRADA_ENESIMA);
        menuBuilder.setPlatoPrincipal(PlatoPrincipal.PLATO_PRINCIPAL_ENESIMO);
        menuBuilder.setPostre(Postre.POSTRE_ENESIMO);
    }

}
