import { View, Text, Button } from "react-native";

import Form from "../../containers/SignInFormContainer";
import { useUnauthenticatedNavigation } from "../../navigation/useNavigation";
import SignInProvider from "../../providers/SignInProvider";

const SignInScreen = () => {
  const nav = useUnauthenticatedNavigation();

  return (
    <SignInProvider>
      <View testID="sign-in-screen">
        <Text>Sign In Screen</Text>

        <Form />

        <Text>Don't have an account?</Text>

        <Button title="Sign Up" onPress={() => nav.navigate("SignUp")} />
      </View>
    </SignInProvider>
  );
};

export default SignInScreen;
