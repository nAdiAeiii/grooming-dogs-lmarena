// esbuild --inject: the classic JSX factory uses the React that WordPress core ships (handle "react", window.React).
export const React = window.React;
