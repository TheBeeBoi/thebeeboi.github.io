module.exports = function (config) {
    config.addPassthroughCopy("./src/style.css");
    config.addPassthroughCopy("./src/script.js");
    config.addPassthroughCopy("./src/extras", {});
    config.addPassthroughCopy("./src/favicon.ico");
    config.addPassthroughCopy("./jetbra.in_codes");
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}
