// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" if input is empty', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" if value is true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" if value is false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean regardless of input', function () {
        expect(isFive()).toBe("boolean");
    });
    it('should return true when input is 5', function () {
        expect(isFive(5)).toBe(true);
    });
});



// describe("plusOne", function () {
//   it("should be defined a function", function () {
//     expect(typeof plusOne).toBe("function")
//   });
//   it("should return a number", function () {
//     expect(typeof plusOne()).toBe("number");
//   })
//     it("should return 5 when passed 4", function () {
//         expect(plusOne(4)).toBe(5);
//   })
//     it("should return 6 when passed 5", function () {
//         expect(plusOne(5)).toBe(6);
//     })
//     it("should return 0 when passed anything but a number", function () {
//         expect(plusOne()).toBe(0);
//     })
//
// })

