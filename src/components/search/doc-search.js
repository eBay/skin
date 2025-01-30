import "@docsearch/css";
import docsearch from "@docsearch/js";

export function init(container) {
    docsearch({
        container,
        indexName: "skin",
        appId: "4AG9MNELVM",
        apiKey: "398f02a5655ce918efcb965b5dc5bcd4",
    });
}
