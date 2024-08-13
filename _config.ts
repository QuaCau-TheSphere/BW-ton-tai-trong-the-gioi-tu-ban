import lume from "lume/mod.ts";
import wiki from "wiki/mod.ts";
import metas from "lume/plugins/metas.ts";
import ogImages from "lume/plugins/og_images.ts";
import sitemap from "lume/plugins/sitemap.ts";
const markdown = {
  options: {
    breaks: true,
  },
};

const site = lume({
  src: "./docs",
  location: new URL("https://kiếmtiền.quảcầu.cc"),
  server: {
    open: true,
  },
}, { markdown });

site.use(wiki({
  favicon: {
    input: "assets/favicon.svg"
  }
}));

site.use(ogImages());
site.use(metas());
site.use(sitemap());

function decodeEntities(encodedString: string) {
  const translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  const translate = {
    "nbsp":" ",
    "amp" : "&",
    "quot": "\"",
    "lt"  : "<",
    "gt"  : ">"
  };
  return encodedString.replace(translate_re, function(match, entity) {
    return translate[entity];
  }).replace(/&#(\d+);/gi, function(match, numStr) {
    const num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });
}

site.process([".html"], (pages) => {
  for (const page of pages) {
    const mermaidBlocks = page.document?.getElementsByClassName("language-mermaid");
    if (!mermaidBlocks) continue
      for (const mermaidBlock of mermaidBlocks) {
        mermaidBlock.className = "mermaid"
        mermaidBlock.innerHTML = mermaidBlock.innerHTML.replaceAll("&gt;", ">").replaceAll("&lt;", "<")

        // mermaidBlock.innerHTML = decodeEntities(mermaidBlock.innerHTML);
      }
    }
  }
);

export default site;

