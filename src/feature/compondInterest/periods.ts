export default class Periods {
    private readonly now: number;
    private readonly end: number;

    constructor(now: number, end: number) {
        this.validatePeriods(now, end)
        this.validatePositiveNumbers(now, end);
        this.now = now;
        this.end = end;
    }

    public get isEnd(): boolean {
        return this.now >= this.end;
    }

    public get next(): Periods {
        if (this.now < this.end) {
            return new Periods(this.now + 1, this.end)
        }
        throw new Error(`there is no next. no next`);
    }

    private validatePositiveNumbers(...numbers: number[]): void {
        numbers.forEach(number => {
            if (number < 0) {
                throw new Error('three is negative number');
            }
        });
    }

    private validatePeriods(now: number, end: number) {
        if (now > end) {
            throw new Error(`now is bigger than end -> now : ${now}, end ${end}`);
        }
    }
}
