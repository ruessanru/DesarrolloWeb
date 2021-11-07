package java.PatronesDiseno.Eljemplo2Adapter;

import java.PatronesDiseno.Eljemplo2Adapter.Adapters.LamparaEspecialAdapter;
import java.PatronesDiseno.Eljemplo2Adapter.Lamparas.LamaparaComun;
import java.PatronesDiseno.Eljemplo2Adapter.Lamparas.Lampara;
import java.util.Scanner;

public class Cliente {

    private static Scanner S = new Scanner(System.in);
    private static Lampara lampara;
    public static void main(String[] args) {
        int opcion;

        do{
            opcion= Menu();
            switch (opcion){

                case 1:
                lampara=new LamaparaComun();
                usarLampara();
                break;

                case 2:
                lampara=new LamparaEspecialAdapter();
                usarLampara();
                break;

                case 3:
                System.out.println("Saliendo...");
                break;

                default:
                System.out.println("opción no valida");

            }
        }while(opcion!=3);
    }


        private static  int Menu(){
              System.out.print(
                "1. Encender Lámpara común"
                +"2. Encender Lámpara Especial"
                +"3. Salir"
                +"Seleccione  lo que desea hacer:"

              );
              return Integer.parseInt(S.nextLine());


        }
        private static void usarLampara(){

            lampara.encender();
            lampara.apagar();
        }


        }




