import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import GoogleLogin from "@/assets/icons/google-login.svg";
import MSLogin from "@/assets/icons/microsoft-login.svg";

export interface SocialLoginProps {
  onGoogleLogin: () => void;
  onMsLogin: () => void;
}
export default function SocialLogin({
  onGoogleLogin,
  onMsLogin,
}: SocialLoginProps) {
  return (
    <Card className="w-[396px] shadow-none">
      <CardHeader>
        <h2 className="text-xl font-bold text-center">Login with</h2>
      </CardHeader>
      <CardContent className="flex justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full"
          onClick={onGoogleLogin}
        >
          <img src={GoogleLogin} alt="Google" width={24} height={24} />
          <span className="sr-only">Login with Google</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full"
          onClick={onMsLogin}
        >
          <img src={MSLogin} alt="Microsoft" width={24} height={24} />
          <span className="sr-only">Login with Microsoft</span>
        </Button>
      </CardContent>
      <Separator className="my-4" />
      <CardFooter className="flex flex-col space-y-4 text-center text-sm text-muted-foreground">
        <p>
          By continuing, you agree to our{" "}
          <a href="/terms" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
        <a href="/help" className="text-primary hover:underline">
          Need help?
        </a>
        <p className="text-xs">Version 1.0.0</p>
      </CardFooter>
    </Card>
  );
}
