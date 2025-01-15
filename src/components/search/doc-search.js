import "@docsearch/css";
import docsearch from "@docsearch/js";

export function init(container) {
    docsearch({
        container,
        indexName: "skin",
        appId: "R2IYF7ETH7",
        apiKey: "599cec31baffa4868cae4e79f180729b",
    });
}
