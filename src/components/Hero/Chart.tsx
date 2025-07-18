import { useEffect, useRef } from "react";

const Chart = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "COINBASE:BTCUSD",
      chartOnly: true,
      dateRange: "1M",
      trendLineColor: "rgba(41, 88, 172, 1)",
      underLineBottomColor: "rgba(12, 18, 44, 1)",
      underLineColor: "rgba(12, 18, 44, 1)",
      noTimeScale: false,
      colorTheme: "dark",
      isTransparent: true,
      locale: "en",
      width: "100%",
      height: "100%",
      autosize: true,
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = ""; // برای جلوگیری از چندبار لود شدن ویجت
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <div ref={containerRef} className="tradingview-widget-container" />
    </div>
  );
};

export default Chart;
