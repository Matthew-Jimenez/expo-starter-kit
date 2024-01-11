import { makeAutoObservable } from "mobx";
import { Alert } from "react-native";

import AuthenticationService from "../services/AuthenticationService";
import ObservableProperty from "../utils/ObservableProperty";

class SignUpViewModel {
  public email = new ObservableProperty<string>("");

  public password = new ObservableProperty<string>("");

  public confirmPassword = new ObservableProperty<string>("");

  public signUp = async () => {
    const { email, password } = this;

    Alert.alert(
      "Sign Up",
      `Email: ${email.value} Password: ${password.value} Confirm: ${this.confirmPassword.value}`,
    );
  };

  constructor(public authService: typeof AuthenticationService) {
    makeAutoObservable(this);
  }
}

export default SignUpViewModel;
