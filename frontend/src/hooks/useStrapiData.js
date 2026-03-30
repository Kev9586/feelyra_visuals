import { useState, useEffect, useRef } from 'react';

export const useStrapiData = (fetcher, fallback) => {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(!!process.env.REACT_APP_STRAPI_URL);
  const fetcherRef = useRef(fetcher);

  useEffect(() => {
    if (!process.env.REACT_APP_STRAPI_URL) return;
    let mounted = true;
    fetcherRef.current().then(result => {
      if (mounted && result) setData(result);
      if (mounted) setLoading(false);
    });
    return () => { mounted = false; };
  }, []);

  return { data, loading };
};
