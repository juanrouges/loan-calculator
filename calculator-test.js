
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: '20000', years: '5', rate: '5' })).toEqual('377.42');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({ amount: '20000', years: '5', rate: '5' })).toBeCloseTo('377.42', 2);
});
