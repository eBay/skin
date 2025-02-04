import "@docsearch/css";
import docsearch from "@docsearch/js";

export function init(container) {
    docsearch({
        container,
        indexName: "opensource-ebay",
        appId: "XQS94B05ZH",
        apiKey: "86ffca6d26156df709adfd8d4a44f8b5",
    });
}
