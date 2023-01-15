import { useEffect, useMemo, useState } from 'react';

/**
 * Check if a media query matches the UI
 * @param {String} mediaQueryString
 * @returns {boolean}
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/change_event
 *
 * Example:
 *    useMediaQuery('(max-width: 600px)');
 *    useMediaQuery('only screen and (min-width: 600px)');
 *    useMediaQuery('@media only screen and (min-width: 600px)');
 */
export const useMediaQuery = (mediaQueryString: string): boolean => {
  const queryString = removeReservedMediaKeyWord(mediaQueryString);
  const query = useMemo(() => window.matchMedia(queryString), [queryString]);
  const [matches, setMatches] = useState(query.matches);
  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    query.addEventListener('change', listener);
    return () => query.removeEventListener('change', listener);
  }, [query]);
  return matches;
};

function removeReservedMediaKeyWord(mediaQueryString: string) {
  return mediaQueryString.replace('@media', '').trim()
};
