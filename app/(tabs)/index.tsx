import { FlatList, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Card from "@/components/Card";

const dataCard = require("@/assets/dataCard.json");

export default function Index() {
  return (
    <View style={style.container}>
      <FlatList
        data={dataCard.posts}
        renderItem={({ item, index }) => (
          <Card
            id={item.id}
            sumberGambar={item.sumberGambar}
            judul={item.judul}
            keterangan={item.keterangan}
          />
        )}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    padding: 16,
  },
});
