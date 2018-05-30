import { getEnvironment } from '.';

describe('getEnvironment', () => {
    let savedEnvironment;
    let savedProcess;

    beforeEach(() => {
        savedEnvironment = process.env;
        savedProcess = global.process;
        process.env = {};
    });

    afterEach(() => {
        process.env = savedEnvironment;
        global.process = savedProcess;
    });

    it('returns the value set in process.env.NODE_ENV', () => {
        global.process.env.NODE_ENV = 'test';

        expect(getEnvironment()).toBe('test');
    });

    it('defaults to development if no value is set', () => {
        global.process.env.NODE_ENV = undefined;

        expect(getEnvironment()).toBe('development');
    });

    it('defaults to development if process is not defined', () => {
        delete global.process;

        expect(getEnvironment()).toBe('development');
    });
});
