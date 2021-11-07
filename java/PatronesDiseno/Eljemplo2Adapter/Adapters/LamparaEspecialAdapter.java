package java.PatronesDiseno.Eljemplo2Adapter.Adapters;

import java.PatronesDiseno.Eljemplo2Adapter.LamparaEspecial.LamparaEspecial;
import java.PatronesDiseno.Eljemplo2Adapter.Lamparas.Lampara;

public class LamparaEspecialAdapter extends Lampara {

    private LamparaEspecial lamparaEspecial;

    @Override
    public void encender() {
        System.out.println("Enceder lampara especial con adapter");
        this.lamparaEspecial.conectar();
        this.lamparaEspecial.activar();
    }

    @Override
    public void apagar() {
        System.out.println("Apagar lampara especial con adapter");
        this.lamparaEspecial.desactivar();
        this.lamparaEspecial.desconectar();
        
    }
    
}
