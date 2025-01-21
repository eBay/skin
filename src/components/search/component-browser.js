export default class {
    async onMount() {
        const { init } = await import("./doc-search");
        init(this.getEl("container"));
    }
}
