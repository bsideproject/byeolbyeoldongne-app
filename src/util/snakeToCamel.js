export default (string) => {
    return string.replace(/\_\w/g, (matched) => matched[1].toUpperCase());
};
