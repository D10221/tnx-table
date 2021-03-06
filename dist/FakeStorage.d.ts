export declare class FakeStorage implements Storage {
    private inner;
    length: number;
    clear(): void;
    getItem: (key: string) => any;
    key: (index: number) => string;
    removeItem: (key: string) => void;
    setItem: (key: string, data: string) => void;
    [key: string]: any;
    [index: number]: string;
    constructor(inner?: Map<string, any>);
}
