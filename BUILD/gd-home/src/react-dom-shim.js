// "react-dom/client" resolves to WordPress core's ReactDOM 18 (window.ReactDOM).
export const createRoot = (el) => window.ReactDOM.createRoot(el);
