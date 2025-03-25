import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DeleteTeamCard() {
  return (
    <Card>
      <CardHeader>
        <header className="font-gmarketBold">Danger Zone</header>
        <p>팀을 삭제하고 팀과 관련된 멤버 및 프로젝트 정보를 모두 삭제합니다</p>
      </CardHeader>
      <div className="flex justify-end">
        <CardContent>
          <Button>팀 삭제하기</Button>
        </CardContent>
      </div>
    </Card>
  );
}
