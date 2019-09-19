<!-- TTI / Polyfill / GA / Hotjar -->

<script>
    ! function() {
        if ('PerformanceLongTaskTiming' in window) {
            var g = window.__tti = {
                e: []
            };
            g.o = new PerformanceObserver(function(l) {
                g.e = g.e.concat(l.getEntries())
            });
            g.o.observe({
                entryTypes: ['longtask']
            })
        }
    }();
</script>

<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/GoogleChromeLabs/tti-polyfill@0.2.2/tti-polyfill.js"></script>
<script> ttiPolyfill.getFirstConsistentlyInteractive().then(console.log);
    ttiPolyfill.getFirstConsistentlyInteractive().then((tti) => {
        if (tti > 1) {
            gtag('event', 'timing_complete', {
                'name': 'TTI',
                'value': tti,
                'event_category': 'Page Speed'
            });
        }
    });
</script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-136417313-1"></script>
<script>
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'UA-136417313-1');
</script>

<!-- Hotjar Tracking Code for www.consumermattressadvocate.com -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1273451,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

<!-- End TTI / Polyfill / GA / Hotjar -->

<!-- Site Icon -->
<link rel="icon" type="image/png" href="https://res.cloudinary.com/dc34yv7g5/image/upload/v1558117172/site-icon_1_rgragh.png" />
<!-- End of Site Icon -->