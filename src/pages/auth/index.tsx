import SocialLogin from "@/components/sections/social-login";
import { useAuth } from "@/hooks/auth/useAuth";

function Auth() {
  const { onGoogleLogin, onMsLogin } = useAuth();
  return (
    <div className="flex flex-col h-full justify-center items-center p-16">
      <SocialLogin {...{ onGoogleLogin, onMsLogin }} />
    </div>
  );
}

export default Auth;
