import CompoundInterestInfo from "./compoundInterest";
import Periods from "./periods";

export default function calculateCompoundInterest(savingInfo: CompoundInterestInfo, periods) {
    const savingAmountHistory:CompoundInterestInfo[] = [
        savingInfo
    ];
    return calculate(savingInfo, periods, savingAmountHistory);
}

function calculate(compoundInterestInfo: CompoundInterestInfo, periods: Periods, savingHistory) {
    if (periods.isEnd) {
        return savingHistory;
    }

    const nextYearCompoundInterestInfo = compoundInterestInfo.nextYearCompoundInterestInfo;
    savingHistory.push(nextYearCompoundInterestInfo);
    return calculate(nextYearCompoundInterestInfo, periods.next, savingHistory);
}