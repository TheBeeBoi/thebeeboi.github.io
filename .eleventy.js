module.exports = function (config) {
    config.addPassthroughCopy("./src/style.css");
    config.addPassthroughCopy("./src/xml.css");
    config.addPassthroughCopy("./src/script.js");
    config.addPassthroughCopy("./src/extras", {});
    config.addPassthroughCopy("./src/favicon.ico");
    config.addPassthroughCopy("./jetbra.in_codes");
    config.addPlugin(require("@11ty/eleventy-plugin-rss"));
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}
