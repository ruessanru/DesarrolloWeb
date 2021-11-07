package java.PatronesDiseno.Ejemplo1Buider.Builders;


import java.PatronesDiseno.Ejemplo1Buider.Menus.TipoMenu;
import java.PatronesDiseno.Ejemplo1Buider.components.Entrada;
import java.PatronesDiseno.Ejemplo1Buider.components.PlatoPrincipal;
import java.PatronesDiseno.Ejemplo1Buider.components.Postre;

public interface Builder {
    void setTipoMenu(TipoMenu type);
    void setEntrada(Entrada entrada);
    void setPlatoPrincipal(PlatoPrincipal platoPrincipal);
    void setPostre(Postre postre);
    
}