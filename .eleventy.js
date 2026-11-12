module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_src/style.css");
    eleventyConfig.addPassthroughCopy("_src/img");
    return {
        dir: {
            input: "_src"
        }
    }
};