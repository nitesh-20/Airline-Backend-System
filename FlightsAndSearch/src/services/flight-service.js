const { FlightRepository, AirplaneRepository } = require("../repository/index");

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightsRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightsRepository.createFlight({
                ...data, totalSeats:  airplane.capacity 
            })
            return flight;
        } catch (error) {
            console.error("Something went wrong at service layer", error);
            throw {error};
        }
    }

    async getFlightData() {
        try {

        } catch (error) {

        }
    }

} 

module.exports = FlightService;


/**
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price
 *    -> airplane
*/