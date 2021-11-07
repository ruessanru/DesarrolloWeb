package java.PatronesDiseno.Ejemplo1Adapter.square;

   //Las piezasCuadradas(SquarePegs) no son compatibles con los AgujerosRedondos(RoundHoles).
   
public class SquarePeg {
    private double width;

    public SquarePeg(double width) {
        this.width = width;
    }

    public double getWidth() {
        return width;
    }

    public double getSquare() {
        double result;
        result = Math.pow(this.width, 2);
        return result;
    }
}
