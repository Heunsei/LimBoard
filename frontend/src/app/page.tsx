import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Home() {
  return (
    <div className="flex gap-4">
      <Input />
      <Button size="sm">click here</Button>
      <Button variant="destructive">click here</Button>
      <Button variant="secondary">click here</Button>
      <Button variant="ghost">click here</Button>
      <Button variant="muted">muted</Button>
      <Button variant="teritary">teritary</Button>
    </div>
  );
}
