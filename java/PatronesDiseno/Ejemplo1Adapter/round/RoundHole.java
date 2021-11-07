package java.PatronesDiseno.Ejemplo1Adapter.round;


 //Los AgujerosRedondos (RoundHoles) son compatibles con  las PiezasRedondas (RoundPegs).

public class RoundHole {

    private double radius;

    public RoundHole(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public boolean fits(RoundPeg peg) {
        boolean result;
        result = (this.getRadius() >= peg.getRadius());
        return result;
    }
    
}
