<<<<<<< HEAD
import lume from "lume/mod.ts";
=======
import lume from "lume/mod.ts"
>>>>>>> c0d3b70881cf4ed62e5e2181c3211df89b86a3ac
import wiki from "wiki/mod.ts";
import metas from "lume/plugins/metas.ts";
import ogImages from "lume/plugins/og_images.ts";
import sitemap from "lume/plugins/sitemap.ts";
<<<<<<< HEAD
import mermaid from "https://deno.land/x/lume_mermaid_plugin/mod.ts";
=======
import mermaid from "@ooker777/lume-mermaid-plugin";
>>>>>>> c0d3b70881cf4ed62e5e2181c3211df89b86a3ac

const markdown = {
  options: {
    breaks: true,
  },
};

const site = lume({
  src: "./docs",
  location: new URL("https://kiếmtiền.quảcầu.cc"),
  server: {
<<<<<<< HEAD
    open: true,
  },
}, { markdown });


=======
    open: true, // Tự động mở trình duyệt khi xong
  },
}, { markdown });

// site.use(wiki());
>>>>>>> c0d3b70881cf4ed62e5e2181c3211df89b86a3ac
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
