var multiplier = require('../../services/multiplier');

describe("multiplier tests ", function() {
    var _numberA;
    var _numberB;

    it("should return numberA multiply by numberB", function() {
        _numberA = 6;
        _numberB = 2;
        var result = multiplier.multiple(_numberA, _numberB);

        expect(result).toEqual(12);
    });
});