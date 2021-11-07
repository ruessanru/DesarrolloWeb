package java.PatronesDiseno.Ejemplo1Adapter.round;


// Las PiezasRedondas (RoundPegs)son compatibles con Los AgujerosRedondos (RoundHoles)  .

public class RoundPeg {

 
    private double radius;

    public RoundPeg() {}

    public RoundPeg(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }
}
