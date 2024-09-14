import { Text, View } from "react-native";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <ProfileCard fname="Kenn" lname={"Roberson"} age={57}>
          hello
        </ProfileCard>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
