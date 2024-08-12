module.exports = function (tag, t) {
    tag.pushContainer(
        "attributes",
        t.markoAttribute(
            "bodyCode",
            t.stringLiteral(tag.get("body").toString()),
        ),
    );
    tag.get("body").set("body", []);
};
