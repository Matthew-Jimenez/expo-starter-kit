import { observer } from "mobx-react-lite";

import SignUpFormComponent from "../components/SignUpFormComponent";
import { useSignUp } from "../providers/SignUpProvider";

const SignUpFormContainer = () => {
  const model = useSignUp();

  return (
    <SignUpFormComponent
      email={model.email.value}
      password={model.password.value}
      setEmail={model.email.setValue}
      setPassword={model.password.setValue}
      confirmPassword={model.confirmPassword.value}
      setConfirmPassword={model.confirmPassword.setValue}
      onSubmit={model.signUp}
      loading={model.authService.loading}
    />
  );
};

export default observer(SignUpFormContainer);
