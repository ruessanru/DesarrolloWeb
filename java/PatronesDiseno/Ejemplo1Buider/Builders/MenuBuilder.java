package java.PatronesDiseno.Ejemplo1Buider.Builders;

import java.PatronesDiseno.Ejemplo1Buider.Menus.Menu;
import java.PatronesDiseno.Ejemplo1Buider.Menus.TipoMenu;
import java.PatronesDiseno.Ejemplo1Buider.components.Entrada;
import java.PatronesDiseno.Ejemplo1Buider.components.PlatoPrincipal;
import java.PatronesDiseno.Ejemplo1Buider.components.Postre;

public class MenuBuilder implements Builder {
      
        private TipoMenu tipoMenu;
        private Entrada entrada;
        private PlatoPrincipal platoPrincipal;
        private Postre postre;
        

        
    
        public void setTipoMenu(TipoMenu tipoMenu) {
            this.tipoMenu = tipoMenu;
            
        }
        @Override
        public void setEntrada(Entrada entrada) {
            this.entrada = entrada;
            
        }
        @Override
        public void setPlatoPrincipal(PlatoPrincipal platoPrincipal) {
            this.platoPrincipal =platoPrincipal;
            
        }
        @Override
        public void setPostre(Postre postre) {
            this.postre = postre;
        }
        public Menu getResult() {
            return new Menu(tipoMenu, entrada, platoPrincipal, postre);
        }
        
        
    }
