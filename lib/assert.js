var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Asserion failed: " + assertionToCheck + " is not truthy");
    }
    else {
      console.log("Assertion passed: " + assertionToCheck + " is truthy");
    }
  }
};
