import { Text, View } from 'react-native';
// import Profile from './components/Profile/Profile';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { s } from "./App.style"

export default function App() {
  return (<SafeAreaProvider>
    <SafeAreaView>
      <Text style={s.title}>hello</Text>
      <View style={s.square}><Text style={s.innerText}>Yo Yo!</Text></View>
    </SafeAreaView>
  </SafeAreaProvider>
  );
}

