var ApplicationEmbed =
  ApplicationEmbed ||
  (function (t, e) {
    function i(t) {
      for (
        var e = "",
          i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          a = i.length,
          n = 0;
        n < t;
        n++
      )
        e += i.charAt(Math.floor(Math.random() * a));
      return e;
    }
    return {
      init: function () {
        for (
          var t = document.getElementsByClassName("taggbox-socialwall"), e = 0;
          e < t.length;
          e++
        )
          if (
            null == t[e].getAttribute("data-is-load") ||
            "0" == t[e].getAttribute("data-is-load") ||
            null == t[e].getAttribute("data-is-load")
          ) {
            const a = "https://web.taggshop.io/embed.json",
              n = `root_${i(5)}`;
            t[e].setAttribute("data-render-id", n),
              t[e].setAttribute("data-is-load", 0),
              t[e].setAttribute("id", `co_${n}`),
              fetch(a)
                .then((t) => t.json())
                .then((t) => {
                  const { css: e, id: i, script: a } = t;
                  let d = document.createElement("div");
                  d.setAttribute("id", n),
                    document.getElementById(`co_${n}`).appendChild(d);
                  let o = document.createElement("link");
                  o.setAttribute("type", "text/css"),
                    o.setAttribute("rel", "stylesheet"),
                    o.setAttribute("onload", "this.media='all'"),
                    o.setAttribute("href", e),
                    document.head.appendChild(o);
                  let r = document.createElement("script");
                  r.setAttribute("src", a),
                    (r.defer = !0),
                    document.body.appendChild(r);
                });
          }
      },
    };
  })(window);
ApplicationEmbed.init();
