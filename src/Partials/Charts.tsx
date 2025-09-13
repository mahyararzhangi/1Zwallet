import { useEffect, useRef } from "react";

type ChartsProps = {
  symbol: string;
  color?: string; // رنگ اختیاری
};

export function Charts({ symbol, color = "#fff" }: ChartsProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      chartOnly: true,
      dateRange: "1M",
      trendLineColor: color, // رنگ از props یا پیش‌فرض سفید
      noTimeScale: false,
      colorTheme: "light",
      isTransparent: true,
      locale: "en",
      width: "100%",
      autosize: true,
      height: "100%",
    });

    container.current.appendChild(script);
  }, [symbol, color]); // وقتی symbol یا رنگ عوض بشه، دوباره اجرا میشه

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-copyright">
        <a
          href={`https://www.tradingview.com/symbols/${symbol.replace(
            ":",
            "-"
          )}/`}
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}
