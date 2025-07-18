import { useEffect, useRef } from "react";

export const Chart = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "FX:EURUSD",
      width: "100%",
      height: "100%",
      locale: "en",
      dateRange: "ALL",
      colorTheme: "light",
      isTransparent: true,
      autosize: true,
      largeChartUrl: "",
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = ""; // Clear any previous scripts
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        ref={containerRef}
        className="tradingview-widget-container__widget"
      />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};
