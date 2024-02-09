var ApplicationEmbed = ApplicationEmbed || function(t, e) {
    function i(t) {
      for (var e = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = i.length, n = 0; n < t; n++)
        e += i.charAt(Math.floor(Math.random() * a));
      return e
    }
    return {
      init: function() {
        for (let t = document.getElementsByClassName("tagshop-socialwall"), e = 0; e < t.length; e++)
          if (undefined == t[e].getAttribute("data-is-load") || "0" == t[e].getAttribute("data-is-load") || null == t[e].getAttribute("data-is-load")) {
            const a = "https://web.taggshop.io/embed.json",
              n = `root_${i(5)}`;
            t[e].setAttribute("data-render-id", n), t[e].setAttribute("data-is-load", 0), t[e].setAttribute("id", `co_${n}`);
  
            // Define a function to check if the parent element is available
            const checkParentElement = () => {
              const parentElement = document.getElementById(`co_${n}`);
              if (parentElement) {
                // Parent element is available, append child element
                const childElement = document.createElement("div");
                childElement.setAttribute("id", n);
                parentElement.appendChild(childElement);
  
                // Load CSS and script
                fetch(a).then((t => t.json())).then((t => {
                  const {
                    css: e,
                    id: i,
                    script: a
                  } = t;
  
                  let o = document.createElement("link");
                  o.setAttribute("type", "text/css");
                  o.setAttribute("rel", "stylesheet");
                  o.setAttribute("onload", "this.media='all'");
                  o.setAttribute("href", e);
                  document.head.appendChild(o);
  
                  let r = document.createElement("script");
                  r.setAttribute("src", a);
                  r.defer = true;
                  document.body.appendChild(r);
                }));
              } else {
                // Parent element is not available, retry after a delay
                setTimeout(checkParentElement, 100);
              }
            };
  
            // Start checking for the parent element
            checkParentElement();
          }
      }
    }
  }(window);
  ApplicationEmbed.init();