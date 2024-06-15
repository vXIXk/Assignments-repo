"use strict";

class Vehicle {
      constructor(brand, model, dimensions, manufactureDate) {
            if (typeof dimensions !== "object") {
                  throw new TypeError(
                        `The "dimensions" property value mustn't be of a primitive data type`,
                  );
            }
            if (
                  !("length" in dimensions) ||
                  !("width" in dimensions) ||
                  !("height" in dimensions)
            ) {
                  throw new Error(
                        `A required value not passed to the "dimensions" property`,
                  );
            }
            this.brand = brand;
            this.model = model;
            this.dimensions = dimensions;
            this.manufactureDate = manufactureDate;
      }
      get age() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.manufactureDate;
      }

      getFullInfo({ brand, model, age } = this) {
            return `${brand} ${model}\nManufactured ${age} years ago`;
      }
}

class PassengerTransport extends Vehicle {
      constructor(
            brand,
            model,
            dimensions,
            manufactureDate,
            passengerLimit,
            passengerCount,
      ) {
            if (typeof passengerLimit !== "number") {
                  throw new TypeError(
                        `The "passengerLimit" property value must be a number`,
                  );
            }
            if (typeof passengerCount !== "number") {
                  throw new TypeError(
                        `The "passengerCount" property value must be a number`,
                  );
            }
            super(brand, model, dimensions, manufactureDate);
            this.passengerLimit = passengerLimit;
            this.passengerCount = passengerCount;
      }

      getFullInfo({ brand, model, age, passengerLimit } = this) {
            return `${brand} ${model}\nProduced ${age} years ago\n${passengerLimit} passenger seats`;
      }

      addPassenger() {
            if (this.passengerCount + 1 > this.passengerLimit) {
                  return false;
            }
            this.passengerCount++;
            return true;
      }
}

class FreightTransport extends Vehicle {
      constructor(brand, model, dimensions, manufactureDate, capacity) {
            if (typeof capacity !== "number") {
                  throw new TypeError(
                        `The "capacity" property value must be a number`,
                  );
            }
            super(brand, model, dimensions, manufactureDate);
            this.capacity = capacity;
      }

      getFullInfo({ brand, model, age, capacity } = this) {
            return `${brand} ${model}\nProduced ${age} years ago\nMass load capacity: ${capacity} kg`;
      }

      checkLoadingPossibility(weight) {
            return weight <= this.capacity;
      }
}

try {
      const cars = [
            new PassengerTransport(
                  "Toyota",
                  "Yaris XP150",
                  {
                        length: "414,5 cm",
                        width: "173 cm",
                        height: "150 cm",
                  },
                  new Date(2013),
                  4,
                  0,
            ),
            new FreightTransport(
                  "Kenworth",
                  "T680",
                  {
                        length: "3,96 m",
                        width: "2,44 m",
                        height: "4,12 m",
                  },
                  new Date(2012),
                  18144,
            ),
      ];

      console.log("car :>> ", cars[0]);
      console.log("truck :>> ", cars[1]);

      console.log(cars[0].addPassenger());
      console.log(cars[0].getFullInfo());

      console.log(cars[1].getFullInfo());
      console.log(cars[1].checkLoadingPossibility(15000));
} catch (err) {
      console.log(err);
}
