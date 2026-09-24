export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold">404</h1>

        <h2 className="text-2xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-base-content/70 mt-2">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="btn btn-primary mt-6"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}