export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl">
          Welcome to{" "}
          <span className="font-semibold text-blue-500">
            Deion&apos;s Template
          </span>
        </h1>
        <p className="text-base">
          A custom Next.js starter template with preconfigured Prettier, ESLint,
          and ShadCN UI components for a streamlined development experience.
        </p>
      </div>
    </div>
  );
}
