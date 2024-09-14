import { s } from "./ProfileCard.style";
import { Text, View, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

export default function ProfileCard({ fname, lname, age, children }) {
  console.log(`${fname}, ${lname}, ${age}`);
  if (age >= 100) {
    return <Text style={{ fontSize: 70 }}>You are old</Text>;
  } else {
    return <Text style={{ fontSize: 70 }}>you are young</Text>;
  }
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={s.texts}>
          <Text style={s.name}>
            {fname} {lname}
          </Text>
          <Text>
            {children} High eye yam a React Native developper,eye code goode. Me
            agee is {age}.
          </Text>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="twitter" size={24} color="#1da1f2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="linkedin" size={24} color="#0a66c2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="facebook" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="github" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
