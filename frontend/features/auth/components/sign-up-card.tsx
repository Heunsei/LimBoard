import logoImage from "@/public/image/logo.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function SignUpCard() {
  return (
    <Card className="w-full h-full md:w-[487px] border-none">
      <CardHeader className="flex items-center text-center">
        <nav className="flex justify-center items-center mb-3">
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src={logoImage}
              alt="logo image"
              width={35}
            />
            <p className="text-3xl">LimBoard</p>
          </div>
        </nav>
        <CardTitle className="font-bold">계속하려면 가입하세요</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex flex-col gap-4">
            <Input
              required
              id="email"
              placeholder="사용할 이메일을 입력해주세요"
            />
            <Input
              required
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <Input
              required
              id="password"
              type="password"
              placeholder="비밀번호를 다시한번 입력해주세요"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full">회원가입</Button>
      </CardFooter>
      <div className="flex justify-center p-5">
        <Link className="text-sky-400" href="/signin">
          로그인
        </Link>
      </div>
    </Card>
  );
}
