import Image from "next/image";
import logoImage from "@/public/image/logo.png";
import Link from "next/link";

// todo : 추후 랜딩페이지로 href 링크 수정
export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <div className="p-6">
      <nav className="flex justify-center items-center mb-3">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={logoImage}
            alt="logo image"
            width={35}
          />
          <Link href="/" className="text-3xl">
            LimBoard
          </Link>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
}
