export interface OUseAuth {
  onGoogleLogin: () => void;
  onMsLogin: () => void;
}
const useAuth = (): OUseAuth => {
  const onGoogleLogin = () => {
    // TODO:
  };

  const onMsLogin = () => {
    // TODO:
  };

  return {
    onGoogleLogin,
    onMsLogin,
  };
};

export { useAuth };
