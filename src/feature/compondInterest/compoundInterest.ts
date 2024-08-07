import SavingInfo from "./savingInfo";

export default class CompoundInterestInfo {
    private readonly savingInfo: SavingInfo
    private readonly rateOfReturn: number

    public get nextYearCompoundInterestInfo() {
        const { balance, savingAmount, savingAmountGrowthRate } = this.savingInfo;
        const nextSavingAmount: number = savingAmount * (1 + savingAmountGrowthRate);
        const totalAsset: number = (balance + nextSavingAmount) * (1 + this.rateOfReturn);
        return new CompoundInterestInfo({
                balance: totalAsset,
                savingAmount: nextSavingAmount,
                savingAmountGrowthRate
            },
            this.rateOfReturn
        );
    }

    public get balance() {
        return this.savingInfo.balance
    }

    constructor(savingInfo: SavingInfo, rateOfReturn: number) {
        const { balance, savingAmount, savingAmountGrowthRate } = savingInfo;
        this.validatePositiveNumbers(balance, savingAmount, savingAmountGrowthRate, rateOfReturn);
        this.savingInfo = savingInfo;
        this.rateOfReturn = rateOfReturn;
    }

    private validatePositiveNumbers(...numbers: number[]): void {
        numbers.forEach(number => {
            if (number < 0) {
                throw new Error('three is negative number');
            }
        });
    }
}