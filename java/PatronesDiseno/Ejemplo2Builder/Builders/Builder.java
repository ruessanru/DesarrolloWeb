package java.PatronesDiseno.Ejemplo2Builder.Builders;

import java.PatronesDiseno.Ejemplo2Builder.Cars.CarType;
import java.PatronesDiseno.Ejemplo2Builder.components.Engine;
import java.PatronesDiseno.Ejemplo2Builder.components.GPSNavigator;
import java.PatronesDiseno.Ejemplo2Builder.components.Transmission;
import java.PatronesDiseno.Ejemplo2Builder.components.TripComputer;

public interface Builder {
    void setCarType(CarType type);
    void setSeats(int seats);
    void setEngine(Engine engine);
    void setTransmission(Transmission transmission);
    void setTripComputer(TripComputer tripComputer);
    void setGPSNavigator(GPSNavigator gpsNavigator);
}