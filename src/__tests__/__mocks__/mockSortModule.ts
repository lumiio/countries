export class MockSortModule {
    value: string;

    constructor() {
        this.value = "";
    }

    setSortHandler(a: any, b: any) {
        let newSortModule = new MockSortModule();
        newSortModule.value = b;
        return newSortModule;
    }
}