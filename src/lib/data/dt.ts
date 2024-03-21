
export const CrimeGroup = ['Murder', 'POCSO', 'Theft', 'Murder', 'gambling'];
export const FIR_Stage = ['Dis/Acq', 'Convicted', 'Convicted', 'Convicted', 'Dis/Acq'];
export const FIR_Type = ['Non Heinous', 'Non Heinous', 'Non Heinous', 'Non Heinous', 'Heinous'];


function calculateValueCounts(array: string[]): { [key: string]: number } {
    return array.reduce((counts, value) => {
        counts[value] = (counts[value] || 0) + 1;
        return counts;
    }, {});
}

// Calculate the counts for CrimeGroup, FIR_Stage, and FIR_Type
export const CrimeGroupCounts = calculateValueCounts(CrimeGroup);
export const FIR_StageCounts = calculateValueCounts(FIR_Stage);
export const FIR_TypeCounts = calculateValueCounts(FIR_Type);
