export const patternOptions: Record<string, string> = {
    'None': 'red',
    ...Object.fromEntries(
        Array.from({length:50}, (_, i)=> [`Pattern ${i+1}`, `p${i+1}`])
    )
};
