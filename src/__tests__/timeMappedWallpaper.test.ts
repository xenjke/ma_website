import 'jest';
import { partOfTheDay, DayPart } from '../timeMappedWallpaper';

let spy: jest.SpyInstance;

describe("#partOfTheDay", () => {

    afterEach(() => {
        spy.mockRestore();
    })

    it('defaults to now', () => {
        const mockDate = new Date(1605567328272)
        spy = jest
            .spyOn(global, 'Date')
            //@ts-ignore
            .mockImplementation(() => mockDate)

        expect(partOfTheDay()).toEqual(DayPart.sunset)
    });

    it('sunrise after 6am', () => {
        let date = new Date(1995, 11, 17, 6, 24, 0)
        expect(partOfTheDay(date)).toEqual(DayPart.sunrise)
    });

    it('sunrise after 8am', () => {
        let date = new Date(1995, 11, 17, 8, 24, 0)
        expect(partOfTheDay(date)).toEqual(DayPart.sunrise)
    });

    it('daytime', () => {
        let date = new Date(1995, 11, 17, 14, 24, 0)
        expect(partOfTheDay(date)).toEqual(DayPart.daytime)
    });

    it('sunset', () => {
        let date = new Date(1995, 11, 17, 19, 24, 0)
        expect(partOfTheDay(date)).toEqual(DayPart.sunset)
    });

    it('night', () => {
        let date = new Date(1995, 11, 17, 23, 24, 0)
        expect(partOfTheDay(date)).toEqual(DayPart.night)
    });
})