package java.PatronesDiseno.Ejemplo1Adapter;

import java.PatronesDiseno.Ejemplo1Adapter.adapters.SquarePegAdapter;
import java.PatronesDiseno.Ejemplo1Adapter.round.RoundHole;
import java.PatronesDiseno.Ejemplo1Adapter.round.RoundPeg;
import java.PatronesDiseno.Ejemplo1Adapter.square.SquarePeg;

public class Cliente {
    public static void main(String[] args) {
        
        RoundHole hole = new RoundHole(5);
        RoundPeg rpeg = new RoundPeg(5);
        if (hole.fits(rpeg)) {
            System.out.println("Round peg r5 fits round hole r5.");
        }

        SquarePeg smallSqPeg = new SquarePeg(2);
        SquarePeg largeSqPeg = new SquarePeg(20);
        

        // El adaptador resuelve el problema
        SquarePegAdapter smallSqPegAdapter = new SquarePegAdapter(smallSqPeg);
        SquarePegAdapter largeSqPegAdapter = new SquarePegAdapter(largeSqPeg);
        if (hole.fits(smallSqPegAdapter)) {
            System.out.println("Square peg w2 fits round hole r5.");
        }
        if (!hole.fits(largeSqPegAdapter)) {
            System.out.println("Square peg w20 does not fit into round hole r5.");
        }
    }
}
