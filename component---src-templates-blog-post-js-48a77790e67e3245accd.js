(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[989],{8505:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#d8c8c8","images":{"fallback":{"src":"/blog/static/85fd3d0e70327f4304e8b6ba3c421fe9/d24ee/profile-pic.jpg","srcSet":"/blog/static/85fd3d0e70327f4304e8b6ba3c421fe9/d24ee/profile-pic.jpg 50w,\\n/blog/static/85fd3d0e70327f4304e8b6ba3c421fe9/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/blog/static/85fd3d0e70327f4304e8b6ba3c421fe9/d4bf4/profile-pic.avif 50w,\\n/blog/static/85fd3d0e70327f4304e8b6ba3c421fe9/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/blog/static/85fd3d0e70327f4304e8b6ba3c421fe9/3faea/profile-pic.webp 50w,\\n/blog/static/85fd3d0e70327f4304e8b6ba3c421fe9/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,l){"use strict";var a=l(7294),i=l(5444),r=l(9285);t.Z=function(){var e,t,n=(0,i.useStaticQuery)("3257411868"),c=null===(e=n.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=n.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"bio"},a.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:l(8505)}),(null==c?void 0:c.name)&&a.createElement("p",null,"Written by ",a.createElement("strong",null,c.name)," ",(null==c?void 0:c.summary)||null," ",a.createElement("br",null),a.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},"Follow me on Twitter")))}},4870:function(e,t,l){"use strict";l.r(t);var a=l(7294),i=l(5444),r=l(9535),n=l(7198),c=l(3751);t.default=function(e){var t,l=e.data,o=e.location;(0,a.useEffect)((function(){var e=document.createElement("script");e.setAttribute("src","https://utteranc.es/client.js"),e.setAttribute("crossorigin","anonymous"),e.setAttribute("async",!0),e.setAttribute("repo","ershadul1/my-blog-comments"),e.setAttribute("issue-term","pathname"),e.setAttribute("theme","github-light");var t=document.getElementById("comment-section");return t.appendChild(e),function(){t.removeChild(e)}}),[]);var s=l.markdownRemark,m=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=l.previous,u=l.next;return a.createElement(n.Z,{location:o,title:m},a.createElement(c.Z,{title:s.frontmatter.title,description:s.frontmatter.description||s.excerpt}),a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},s.frontmatter.title),a.createElement("p",null,s.frontmatter.date)),a.createElement("section",{dangerouslySetInnerHTML:{__html:s.html},itemProp:"articleBody"}),a.createElement("hr",null),a.createElement("footer",null,a.createElement(r.Z,null))),a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,f&&a.createElement(i.Link,{to:f.fields.slug,rel:"prev"},"← ",f.frontmatter.title)),a.createElement("li",null,u&&a.createElement(i.Link,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →")))),a.createElement("div",{id:"comment-section"}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-48a77790e67e3245accd.js.map