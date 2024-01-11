import { makeAutoObservable } from "mobx";

import AuthenticationService from "../services/AuthenticationService";
import ObservableProperty from "../utils/ObservableProperty";

class SignInViewModel {
  public email: ObservableProperty<string> = new ObservableProperty<string>("");

  public password: ObservableProperty<string> = new ObservableProperty<string>(
    "",
  );

  public signIn = async () => {
    const { email, password } = this;

    await this.authService.login(email.value, password.value);
  };

  constructor(public authService: typeof AuthenticationService) {
    makeAutoObservable(this);
  }
}

export default SignInViewModel;
