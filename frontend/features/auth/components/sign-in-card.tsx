import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignInCard() {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center text-center">
        <CardTitle className="text-3xl">Welecome Back!</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex flex-col gap-4">
            <Input id="email" placeholder="Enter your email" />
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Login</Button>
      </CardFooter>
    </Card>
  );
}
