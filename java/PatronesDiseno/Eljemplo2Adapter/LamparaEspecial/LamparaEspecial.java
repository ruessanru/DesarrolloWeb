package java.PatronesDiseno.Eljemplo2Adapter.LamparaEspecial;

public class LamparaEspecial {

    private boolean conectada;

    public boolean isConectada() {
        return this.conectada;
    }

    public boolean getConectada() {
        return this.conectada;
    }

    public void setConectada(boolean conectada) {
        this.conectada = conectada;
    }

    public LamparaEspecial(){

        this.conectada = false;
    }

    public void conectar(){
         System.out.println("Se conecta la lampara especial");
         this.conectada =true;
    }

    public void activar(){
        if( conectada= false){
            System.out.println("No se puede activar la lampara ya que no esta conectada");

        }else{
            System.out.println ("Activada lampara especial");

        }
    }

    public void desactivar(){
        if( conectada= false){
            System.out.println("No se puede desactivar la lampara ya que no esta conectada");

        }else{
            System.out.println ("Desactivada lampara especial");

        }

    }
    public void desconectar(){
        System.out.println("Se desconecta la lampara especial");
        this.conectada =false;
   }
}

