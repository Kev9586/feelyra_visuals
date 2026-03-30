import { useState, useEffect, useCallback } from 'react';

export const useStrapiData = (fetcher, fallback) => {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(!!process.env.REACT_APP_STRAPI_URL);

  const stableFetcher = useCallback(fetcher, []);

  useEffect(() => {
    if (!process.env.REACT_APP_STRAPI_URL) return;
    let mounted = true;
    stableFetcher().then(result => {
      if (mounted && result) setData(result);
      if (mounted) setLoading(false);
    });
    return () => { mounted = false; };
  }, [stableFetcher]);

  return { data, loading };
};
