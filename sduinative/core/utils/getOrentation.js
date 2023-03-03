
export const isPortrait = (Dimensions) => {
    const dim = Dimensions.get('window');
    return dim.height >= dim.width;
};

export const isLandscape = (Dimensions) => {
    const dim = Dimensions.get('window');
    return dim.width >= dim.height;
};