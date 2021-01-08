var subtractor = require('../../services/subtractor');

describe("subtractor tests ", function() {
    var _numberA;
    var _numberB;

    it("should return numberA subtracted by numberB", function() {
        _numberA = 6;
        _numberB = 2;
        var result = subtractor.subtract(_numberA, _numberB);

        expect(result).toEqual(4);
    });
});