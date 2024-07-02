import { useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  return {
    loading,
    setLoading,
  };
};

export default useLoading;