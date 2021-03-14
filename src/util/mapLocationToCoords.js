export default (location) => {
    const { x, y } = location;
    return {
        latitude: y,
        longitude: x,
    };
};
