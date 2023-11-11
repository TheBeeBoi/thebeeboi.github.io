module.exports = function (config) {
    config.addPassthroughCopy("./src/style.css")
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}