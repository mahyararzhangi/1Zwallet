export const Chart  = () => {
    return ( <>
<div className="tradingview-widget-container">
  <div className="tradingview-widget-container__widget"></div>
  <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
  {
  "symbol": "FX:EURUSD",
  "width": "100%",
  "height": "100%",
  "locale": "en",
  "dateRange": "ALL",
  "colorTheme": "light",
  "isTransparent": true,
  "autosize": true,
  "largeChartUrl": ""
}
  </script>
</div>
}