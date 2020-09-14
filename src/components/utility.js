// get all images and audio for interactions
const images = (context => {
    const assetUrls = {};
    context.keys().forEach( item => {
        assetUrls[item.replace('./', '')] = context(item);
    });
    return assetUrls;
})(require.context("../assets/images/", false, /(.jpg)|(.png)$/));
const audio = (context => {
    const assetUrls = {};
    context.keys().forEach( item => {
        assetUrls[item.replace('./', '')] = context(item);
    });
    return assetUrls;
})(require.context("../assets/audio/", false, /(.wav)$/));

// convienience method to replace a state array in a react component's state
class UtilityFunctions {
    static createStateReplacementArray(stateArray, newValueIndex, newValue){
        const arrayReplacement = [...stateArray];
        arrayReplacement[newValueIndex] = newValue;
        return arrayReplacement;
    }

    /**
     * @summary allows shuffling arrays (for array of elements in a state, for example)
     * @param {*} a 
     */
    static arrayShuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

export {images as ImageAssets, audio as AudioAssets, UtilityFunctions} 