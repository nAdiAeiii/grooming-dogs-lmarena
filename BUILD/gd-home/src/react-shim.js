// "react" imports resolve to WordPress core's React 18 (window.React): no second copy, no external request.
const R = window.React;
export default R;
export const { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, Fragment, createElement } = R;
