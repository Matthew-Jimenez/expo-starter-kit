import { makeAutoObservable } from "mobx";

import AuthenticationService from "../services/AuthenticationService";
import ObservableProperty from "../utils/ObservableProperty";

class SignUpViewModel {
  public email = new ObservableProperty<string>("");

  public password = new ObservableProperty<string>("");

  public confirmPassword = new ObservableProperty<string>("");

  public signUp = async () => {
    const { email, password } = this;

    this.authService.signup(email.value, password.value);
  };

  constructor(public authService: typeof AuthenticationService) {
    makeAutoObservable(this);
  }
}

export default SignUpViewModel;
