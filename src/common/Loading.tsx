import { useLocation } from "react-router-dom";

import { useEffect } from "react";

function Loading() {
  const style = {};

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        background: "gray",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
   
      Loading.........
    </div>
  );
}

export default Loading;
