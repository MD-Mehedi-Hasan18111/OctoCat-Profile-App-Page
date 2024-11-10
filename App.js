// import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.octocat}>
        <Image
          source={require("./assets/Oval.png")}
          style={{ height: 100, width: 100, objectFit: "cover" }}
        />
        <View style={{ rowGap: 5 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#34495e" }}>
            The Octocat
          </Text>
          <Text style={{ fontSize: 14, color: "#3498db" }}>@octocat</Text>
          <Text style={{ fontSize: 16, color: "#7f8c8d" }}>
            Joined 25 Jan 2011
          </Text>
        </View>
      </View>

      <View style={{ marginVertical: 40 }}>
        <Text
          style={{
            fontSize: 16,
            textAlign: "justify",
            lineHeight: 24,
            color: "#7f8c8d",
          }}
        >
          Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development to fill empty spaces in a
          layout that do not yet have content.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "rgba(178, 190, 195, 0.1)",
          height: 130,
          width: "100%",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 40,
          marginBottom: 40,
        }}
      >
        <View style={{ alignItems: "center", rowGap: 5 }}>
          <Text style={{ fontSize: 16, color: "#7f8c8d" }}>Repos</Text>
          <Text style={{ fontSize: 20, color: "#34495e", fontWeight: "bold" }}>
            8
          </Text>
        </View>
        <View style={{ alignItems: "center", rowGap: 5 }}>
          <Text style={{ fontSize: 16, color: "#7f8c8d" }}>Followers</Text>
          <Text style={{ fontSize: 20, color: "#34495e", fontWeight: "bold" }}>
            3929
          </Text>
        </View>
        <View style={{ alignItems: "center", rowGap: 5 }}>
          <Text style={{ fontSize: 16, color: "#7f8c8d" }}>Following</Text>
          <Text style={{ fontSize: 20, color: "#34495e", fontWeight: "bold" }}>
            9
          </Text>
        </View>
      </View>

      <View style={{ rowGap: 18 }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 15 }}
        >
          <Image source={require("./assets/003-pin.png")} />
          <Text style={{ fontSize: 18, fontWeight: "300", color: "#474787" }}>
            San Francisco
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 15 }}
        >
          <Image source={require("./assets/002-url.png")} />
          <Text style={{ fontSize: 18, fontWeight: "300", color: "#474787" }}>
            https://github.blog
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 15 }}
        >
          <Image source={require("./assets/004-twitter.png")} />
          <Text style={{ fontSize: 18, fontWeight: "300", color: "#474787" }}>
            @theoctocat
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 15 }}
        >
          <Image source={require("./assets/001-office-building.png")} />
          <Text style={{ fontSize: 18, fontWeight: "300", color: "#474787" }}>
            @github
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 130 }}>
        <Text style={{ textAlign: "center", color: '#34495e' }}>
          {"\u00A9"} Copyright reserved by GitHub
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 60,
    paddingHorizontal: 25,
  },
  octocat: {
    flexDirection: "row",
    justifyContent: "flex-start",
    columnGap: 30,
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
});
