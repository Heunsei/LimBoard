"use client";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function TeamSettingCard() {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const iconImageRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImgFile(file);
      setImgPreview(URL.createObjectURL(file)); // Blob URL 생성
    }
  };
  return (
    <Card>
      <CardHeader>
        <header className="font-gmarketBold">Team Setting</header>
        <p>현재 팀의 설정을 변경합니다</p>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-10">
          <div>
            <Label className="font-black">팀 이름 변경</Label>
            <Input
              className="mt-2"
              required
              type="text"
              placeholder="팀 이름을 입력해주세요"
            />
          </div>
          <div>
            <Label className="font-black">팀 이미지 변경</Label>
            <div className="flex gap-6 items-center mt-2">
              <div className="flex size-[72px] overflow-hidden items-center justify-center bg-neutral-400 rounded-full">
                {!imgPreview ? (
                  <ImageIcon className="size-[36px]" />
                ) : (
                  <Image
                    className="rounded-full size-[72px]"
                    alt="team icon"
                    src={imgPreview || ""}
                    width={72}
                    height={72}
                  />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  id="imageInput"
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={iconImageRef}
                />
                <p>새로운 이미지 파일을 업로드 해주세요</p>
                <Button
                  id="imageInput"
                  type="button"
                  size="sm"
                  className="w-fit"
                  onClick={() => iconImageRef.current?.click()}
                >
                  이미지 업로드
                </Button>
              </div>
            </div>
          </div>
          <Button type="submit">팀 설정 변경</Button>
        </form>
      </CardContent>
    </Card>
  );
}
