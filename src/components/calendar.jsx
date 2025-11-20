import React, { useEffect } from "react";

const KoalendarWidget = () => {
  useEffect(() => {
    // 1️⃣ Add the Koalendar script to the document (only once)
    const script = document.createElement("script");
    script.src = "https://koalendar.com/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // 2️⃣ Initialize Koalendar after the script loads
    script.onload = () => {
      window.Koalendar =
        window.Koalendar ||
        function () {
          (window.Koalendar.props = window.Koalendar.props || []).push(
            arguments
          );
        };

      window.Koalendar("inline", {
        url: "https://koalendar.com/e/meet-with-isaac-galvan",
        selector: "#inline-widget",
      });
    };

    // 3️⃣ Optional cleanup if component unmounts
    return () => {
      const existingWidget = document.getElementById(
        "inline-widget"
      );
      if (existingWidget) existingWidget.innerHTML = "";
    };
  }, []);

  return (
    
  <div className="relative flex justify-center items-center py-8">
    <div id="inline-widget" class="w-[393px]">
    </div>
  </div>


  );
};

export default KoalendarWidget;