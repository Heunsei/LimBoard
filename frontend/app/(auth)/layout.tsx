import Image from "next/image";
import logoImage from "@/public/logo.png";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-center items-center mb-3">
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src={logoImage}
              alt="logo image"
              width={40}
            />
            <p className="font-bold">LimBoard</p>
          </div>
        </nav>
        {children}
      </div>
    </main>
  );
}
