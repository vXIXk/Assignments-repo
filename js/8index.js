//* Recursion

function pow(base, exponent) {
      if (typeof base !== "number" || typeof exponent !== "number") {
            throw new TypeError("Input values must be numbers.");
      }
      if (exponent < -100 || exponent > 100) {
            throw new RangeError(
                  "Exponent value not allowed to be greater than / less than ± 100."
            );
      }
      switch (true) {
            case exponent === 1: {
                  return base;
            }
            case exponent === 0: {
                  return 1;
            }
            case exponent < 0 && exponent >= -100: {
                  return base ** exponent;
            }
      }
      return base * pow(base, --exponent);
}

try {
      console.log(pow(19, 2));
} catch (err) {
      console.log(err);
}
