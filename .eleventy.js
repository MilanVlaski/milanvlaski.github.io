module.exports = function(eleventyConfig) {
  // Copy CSS files to the output directory
  eleventyConfig.addPassthroughCopy({"src/*.*": "."});

  return {
    dir: {
      input: "src",    // Eleventy will look here for files
      output: "_site"  // Eleventy will put the built files here
    }
  }
}
