import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";

type Props = {
  id: number;
  sumberGambar: string;
  judul: string;
  keterangan: string;
};
const PlaceholderImage = require("@/assets/images/08.jpeg");

export default function Card({ id, sumberGambar, judul, keterangan }: Props) {
  const imageSource = sumberGambar ? { uri: sumberGambar } : PlaceholderImage;
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/details/[id]",
          params: { id: id },
        })
      }
    >
      <View style={style.panel}>
        <Image style={style.image} source={imageSource}></Image>
        <View>
          <Text style={style.textWhite}>{judul}</Text>
          <Text style={style.textWhiteKecil}>{keterangan}</Text>
        </View>
      </View>
    </Pressable>
  );
}
const style = StyleSheet.create({
  image: {
    width: 100,
    height: 70,
    marginEnd: 24,
  },
  panel: {
    backgroundColor: "#25292e",
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
  textWhite: {
    fontSize: 20,
    color: "#fff",
  },
  textWhiteKecil: {
    fontSize: 12,
    color: "#fff",
  },
});
