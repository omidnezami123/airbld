import React from "react";
import { useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div>
      <h3>404: Page Not Found</h3>
      <p>
        The requested URL <code>{location.pathname}</code> was not found on this
        server.
      </p>
    </div>
  );
}
