import { observer } from "mobx-react-lite";

import SignInFormComponent from "../components/SignInFormComponent";
import { useSignIn } from "../providers/SignInProvider";

const SignInFormContainer = () => {
  const model = useSignIn();

  return (
    <SignInFormComponent
      email={model.email.value}
      password={model.password.value}
      setEmail={model.email.setValue}
      setPassword={model.password.setValue}
      onSubmit={model.signIn}
      loading={model.authService.loading}
    />
  );
};

export default observer(SignInFormContainer);
