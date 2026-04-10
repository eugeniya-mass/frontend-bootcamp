import { DeepPartial } from '../utils/deep-partial';

interface Nested {
    a: number;
    b: {
        c: string;
        d: { e: boolean };
    };
}

test('DeepPartial works recursively', () => {
    const partial: DeepPartial<Nested> = {
        b: {
            d: {}
        }
    };
    expect(partial).toBeDefined();
});
