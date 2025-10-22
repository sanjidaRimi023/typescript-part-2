{
    let assertion: any;
    assertion = "ts assertion";
    (assertion as string)

    assertion = 10;
    (assertion as number)


    const meterToSentimeter = (value : string|number) => {
        if ( typeof value === 'string') {
            const convertedValue = parseFloat(value) * 100;
        return `this is the convertedValue: ${convertedValue}`
        }
        if (typeof value === 'number') {
            return value*100
        }
    }

    const result1 = meterToSentimeter(1000)
    console.log(result1);
    const result2 = meterToSentimeter("3000")
    console.log(result2);
}