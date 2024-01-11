import { Button, TextInput, View } from "react-native";

interface Props {
  email?: string;
  password?: string;
  setEmail?: (email: string) => void;
  setPassword?: (password: string) => void;
  onSubmit?: () => void;
  loading?: boolean;
}

const SignInFormComponent = ({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
  loading,
}: Props) => {
  return (
    <View>
      <TextInput
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail?.(e.nativeEvent.text);
        }}
        focusable={!loading}
      />

      <TextInput
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword?.(e.nativeEvent.text);
        }}
        focusable={!loading}
      />

      <Button
        title={loading ? "Authenticating" : "Sign In"}
        onPress={onSubmit}
        disabled={loading}
      />
    </View>
  );
};

export default SignInFormComponent;
