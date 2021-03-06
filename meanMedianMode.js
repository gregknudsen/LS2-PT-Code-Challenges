/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */

const meanMedMode = (array) => {
    const result = {}
    const meanResult = getMean(array);
    const medianResult = getMedian(array);
    const modeResult = getMode(array);

    result['mean'] = meanResult;
    result['median'] = medianResult;
    result['mode'] = modeResult;

    return result;
}

const getMean = (array) => {
	const length = array.length;
	const sum = array.reduce((array, prev) => {
		return array += prev;
	}, 0);

	const mean = Math.round(sum / length);
	return mean;
}

const getMedian = (array) => {
    const length = array.length;
    const sorted = array.sort((a, b) => {
        return a - b;
    });
    
    if (length % 2 !== 0) {
        const oddMiddle = Math.floor(length / 2);
        const oddMedian = sorted[oddMiddle];
        return oddMedian;
    } else {
        const evenMiddle = length / 2;
        const evenMedian = (sorted[evenMiddle] + sorted[evenMiddle - 1]) / 2;
        return evenMedian;
    }
}

const getMode = (array) => {
    return array.reduce(function(current, item) {
        var val = current.numMapping[item] = (current.numMapping[item] || 0) + 1;
        if (val > current.greatestFreq) {
            current.greatestFreq = val;
            current.mode = item;
        }
        return current;
    }, {mode: null, greatestFreq: -Infinity, numMapping: {}}, array).mode;
};

console.log(meanMedMode([11,2,2,2,2,2,2,2,2,3,4,5,5,5,6,7,9]));
console.log(meanMedMode([134343,21,23,433333,534,21,534,534,336]));