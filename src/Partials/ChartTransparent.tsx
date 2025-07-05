// const ChartTransparent = () => {
//   return <>hi</>;
// };

// export default ChartTransparent;
import { useEffect, useRef } from "react";

const ChartTransparent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "BITSTAMP:BTCUSD",
      chartOnly: true,
      dateRange: "ALL",
      trendLineColor: "rgba(255, 152, 0, 1)",
      underLineBottomColor: "rgba(38, 198, 218, 0)",
      underLineColor: "rgba(156, 39, 176, 0)",
      noTimeScale: true,
      colorTheme: "dark",
      isTransparent: true,
      locale: "en",
      width: "100%",
      autosize: true,
      height: "100%",
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        className="tradingview-widget-container__widget"
        ref={containerRef}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener noreferrer"
          target="_blank"
        ></a>
      </div>
    </div>
  );
};

export default ChartTransparent;
