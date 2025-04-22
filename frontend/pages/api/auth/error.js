"use client";
import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <h1>Authentication Error</h1>
      {error && <p>Error: {error}</p>}
      <p>Please try again later.</p>
    </div>
  );
};

export default ErrorPage;