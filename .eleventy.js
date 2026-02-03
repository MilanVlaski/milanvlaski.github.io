module.exports = function(eleventyConfig) {
  // Copy CSS files to the output directory
  eleventyConfig.addPassthroughCopy({"src/*.*": "."})
  eleventyConfig.addPassthroughCopy({"src/assets/css": "assets/css"})

  eleventyConfig.addCollection("writing", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/writing/*.md").sort(function(a, b) {
      return a.date - b.date;
    });
  });

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md").sort(function(a, b) {
      return a.date - b.date;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  }
}
