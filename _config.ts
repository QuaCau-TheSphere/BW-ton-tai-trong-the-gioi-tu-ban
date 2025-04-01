import lume from "lume/mod.ts"
import wiki from "wiki/mod.ts";
import metas from "lume/plugins/metas.ts";
import ogImages from "lume/plugins/og_images.ts";
import sitemap from "lume/plugins/sitemap.ts";
import mermaid from "@ooker777/lume-mermaid-plugin";

const markdown = {
  options: {
    breaks: true,
  },
};

const site = lume({
  src: "./docs",
  location: new URL("https://kiếmtiền.quảcầu.cc"),
  server: {
    open: true, // Tự động mở trình duyệt khi xong
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
site.use(mermaid())

export default site;
