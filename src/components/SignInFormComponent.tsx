import { Button, TextInput, View, Text, StyleSheet } from "react-native";

interface Props {
  email?: string;
  password?: string;
  setEmail?: (email: string) => void;
  setPassword?: (password: string) => void;
  onSubmit?: () => void;
  loading?: boolean;
  errorMessage?: string;
}

const SignInFormComponent = ({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
  loading,
  errorMessage,
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

      {errorMessage && <Text>{errorMessage}</Text>}

      <Button
        title={loading ? "Authenticating" : "Sign In"}
        onPress={onSubmit}
        disabled={loading}
      />
    </View>
  );
};

export default SignInFormComponent;
