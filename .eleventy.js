module.exports = function(eleventyConfig) {
  // Copy CSS files to the output directory
  eleventyConfig.addPassthroughCopy({"src/*.*": "."})
  eleventyConfig.addPassthroughCopy({"src/assets/css": "assets/css"})

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  }
}
