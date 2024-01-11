import { Button, TextInput, View } from "react-native";

interface Props {
  email?: string;
  password?: string;
  confirmPassword?: string;
  setEmail?: (email: string) => void;
  setPassword?: (password: string) => void;
  setConfirmPassword?: (confirmPassword: string) => void;
  onSubmit?: () => void;
  loading?: boolean;
}

const SignUpFormComponent = ({
  email,
  password,
  confirmPassword,
  setEmail,
  setPassword,
  setConfirmPassword,
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

      <TextInput
        placeholder="confirm password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword?.(e.nativeEvent.text);
        }}
        focusable={!loading}
      />

      <Button
        title={loading ? "Registering" : "Sign Up"}
        onPress={onSubmit}
        disabled={loading}
      />
    </View>
  );
};

export default SignUpFormComponent;
