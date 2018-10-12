// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-post-js": preferDefault(require("/Users/graham/GitHub/gatsby-starter-procyon/src/templates/post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/graham/GitHub/gatsby-starter-procyon/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/graham/GitHub/gatsby-starter-procyon/src/pages/about.js")),
  "component---src-pages-admin-js": preferDefault(require("/Users/graham/GitHub/gatsby-starter-procyon/src/pages/admin.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/graham/GitHub/gatsby-starter-procyon/src/pages/blog.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/graham/GitHub/gatsby-starter-procyon/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/graham/GitHub/gatsby-starter-procyon/src/pages/index.js")),
  "component---src-pages-services-js": preferDefault(require("/Users/graham/GitHub/gatsby-starter-procyon/src/pages/services.js"))
}

exports.json = {
  "layout-index.json": require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/json/layout-index.json"),
  "post-1.json": require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/json/post-1.json"),
  "post-post-2.json": require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/json/post-post-2.json"),
  "dev-404-page.json": require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/json/404.json"),
  "about.json": require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/json/about.json"),
  "admin.json": require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/json/admin.json"),
  "blog.json": require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/json/blog.json"),
  "contact.json": require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/json/contact.json"),
  "index.json": require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/json/index.json"),
  "services.json": require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/json/services.json"),
  "404-html.json": require("/Users/graham/GitHub/gatsby-starter-procyon/.cache/json/404-html.json")
}