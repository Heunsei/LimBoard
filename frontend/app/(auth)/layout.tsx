export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex items-center bg-neutral-100 min-h-screen">
      <div className="flex justify-center items-center mx-auto max-w-screen-2xl">
        {children}
      </div>
    </main>
  );
}
