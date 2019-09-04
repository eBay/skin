const logEvent = (e) => console.log(e);
const nodeListToArray = (nodeList) => Array.prototype.slice.call(nodeList);

module.exports = {
    logEvent,
    nodeListToArray
};
