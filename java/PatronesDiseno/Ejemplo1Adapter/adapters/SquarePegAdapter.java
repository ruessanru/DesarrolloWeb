package java.PatronesDiseno.Ejemplo1Adapter.adapters;

import java.PatronesDiseno.Ejemplo1Adapter.round.RoundPeg;
import java.PatronesDiseno.Ejemplo1Adapter.square.SquarePeg;

//El adaptador permite colocar clavijas o piezas cuadradas en agujeros redondos.

public class SquarePegAdapter extends RoundPeg {
    private SquarePeg peg;

    public SquarePegAdapter(SquarePeg peg) {
        this.peg = peg;
    }

    @Override
    public double getRadius() {
        double result;
        // Calculo de un radio de círculo mínimo, que pueda ajustarse a esta clavija o pieza cuadrada.
        result = (Math.sqrt(Math.pow((peg.getWidth() / 2), 2) * 2));
        return result;
    }
}