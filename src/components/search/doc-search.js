import "@docsearch/css";
import docsearch from "@docsearch/js";

export function init(container) {
    docsearch({
        container,
        indexName: "skin",
        appId: "4AG9MNELVM",
        apiKey: "9b7a33ff8f0985b0f2b66e90c020b459",
    });
}
