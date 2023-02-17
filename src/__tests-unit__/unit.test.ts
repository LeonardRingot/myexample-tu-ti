import * as service from '../api/service'

describe("basic", () => {
    it("basic ", async () => {

        expect(1 + 2).toEqual(3);
    });
});

describe("test service setPoint", () => {
    it("should throw error with -sur-le-bouc ", async () => {

        let result;
        try {
            result = await service.setPoint('test');
        } catch (err) {
            expect(err).toBeInstanceOf(Error)
        }

    });
});