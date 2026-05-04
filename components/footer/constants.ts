/**
 * Cal.com inline embed document.
 *
 * Stored as a constant so the Footer component does not become dominated by
 * third-party embed markup. Keep this isolated because changes here can affect
 * calendar loading, theme, sizing, and cross-frame height messages.
 */
export const calEmbedSrcDoc = `
  <html>
    <head>
      <style>
        html, body {
          margin: 0;
          padding: 0;
        }

        body {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        :root {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        * {
          box-sizing: border-box;
          -webkit-font-smoothing: inherit;
        }

        h1, h2, h3, h4, h5, h6, p, figure {
          margin: 0;
        }

        body, input, textarea, select, button {
          font-size: 12px;
          font-family: sans-serif;
        }
      </style>
    </head>
    <body>
      <div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline"></div>
      <script type="text/javascript">
        setTimeout(function () {
          (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
              let cal = C.Cal;
              let ar = arguments;
              if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement("script")).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                const api = function () { p(api, arguments); };
                const namespace = ar[1];
                api.q = api.q || [];
                if (typeof namespace === "string") {
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ["initNamespace", namespace]);
                } else p(cal, ar);
                return;
              }
              p(cal, ar);
            };
          })(window, "https://app.cal.com/embed/embed.js", "init");

          Cal("init", "demo", { origin: "https://cal.com" });

          Cal.ns.demo("inline", {
            elementOrSelector: "#my-cal-inline",
            config: { "layout": "month_view", "theme": "dark" },
            calLink: "hxmzaehsan/demo"
          });

          Cal.ns.demo("ui", {
            theme: "dark",
            cssVarsPerTheme: {
              dark: { "cal-brand": "#ffffff" }
            },
            hideEventTypeDetails: true,
            layout: "month_view"
          });
        }, 300);
      </script>
      <script type="module">
        let height = 0;

        function sendEmbedHeight() {
          window.parent.postMessage({
            embedHeight: height
          }, "*");
        }

        const observer = new ResizeObserver((entries) => {
          if (entries.length !== 1) return;
          const entry = entries[0];
          if (entry.target !== document.body) return;

          height = entry.contentRect.height;
          sendEmbedHeight();
        });

        observer.observe(document.body);

        window.addEventListener("message", (event) => {
          if (event.source !== window.parent) return;
          if (event.data !== "getEmbedHeight") return;
          sendEmbedHeight();
        });
      </script>
    </body>
  </html>
  `;

/**
 * Footer navigation links.
 *
 * Kept as data so new legal or utility links can be added without changing
 * the FooterBottom rendering logic.
 */
export const footerLinks = [
    { href: "/thank-you", label: "Thank You" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
];