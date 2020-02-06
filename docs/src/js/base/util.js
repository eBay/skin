const logEvent = (e) => console.log(e); // eslint-disable-line no-console
const nodeListToArray = (nodeList) => Array.prototype.slice.call(nodeList);

module.exports = {
    logEvent,
    nodeListToArray
};
