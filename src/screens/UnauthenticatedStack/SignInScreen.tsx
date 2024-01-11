import { View, Text } from "react-native";

import Form from "../../containers/SignInFormContainer";
import SignInProvider from "../../providers/SignInProvider";

const SignInScreen = () => {
  return (
    <SignInProvider>
      <View>
        <Text>Sign In Screen</Text>

        <Form />
      </View>
    </SignInProvider>
  );
};

export default SignInScreen;
