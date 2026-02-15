module.exports = async function (eleventyConfig) {
  const { I18nPlugin } = await import("@11ty/eleventy")

  eleventyConfig.addPlugin(I18nPlugin, {
    defaultLanguage: "en",
    errorMode: "allow-fallback",
  })

  // Copy CSS files to the output directory
  eleventyConfig.addPassthroughCopy("src/about-me.css")
  eleventyConfig.addPassthroughCopy("src/me.jpg")
  eleventyConfig.addPassthroughCopy("src/assets");


  // We use the prefix to fetch by language
  eleventyConfig.addCollection("en_writing", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/en/writing/*.md").sort(function (a, b) {
      return sortFunction(a, b)
    })
  })

  eleventyConfig.addCollection("sr_writing", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/sr/writing/*.md").sort(function (a, b) {
      return sortFunction(a, b)
    })
  })

  eleventyConfig.addCollection("en_projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/en/projects/*.md").sort(function (a, b) {
      return sortFunction(a, b)
    })
  })

  eleventyConfig.addCollection("sr_projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/sr/projects/*.md").sort(function (a, b) {
      return sortFunction(a, b)
    })
  })

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  }
}

function sortFunction(a, b) {
  const orderA = a.data.order ?? 999;
  const orderB = b.data.order ?? 999;

  // Primary Sort: Order
  if (orderA !== orderB) {
    return orderA - orderB;
  }

  // Secondary Sort: Date (if orders are identical)
  return a.date - b.date;
}
