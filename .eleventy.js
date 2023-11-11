module.exports = function (config) {
    config.addPassthroughCopy("./src/style.css");
    config.addPassthroughCopy("./src/script.js");
    config.addPassthroughCopy("./jetbra.in_codes");
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}
