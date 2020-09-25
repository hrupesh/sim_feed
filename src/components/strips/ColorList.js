import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native-gesture-handler";

export default function ColorList({ pname }) {
  const [value, setValue] = useState(pname.values[0].value);

  return (
    <View style={styles.container}>
      <View style={styles.nameRow}>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={styles.name}>{pname.name}</Text>
          <Text style={styles.unit}> ({pname.unit})</Text>
        </View>
        <TextInput
          style={styles.input}
          value={value}
          keyboardType="number-pad"
          editable={false}
        />
      </View>
      <FlatList
        data={pname.values}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.color}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => setValue(item.value)}
              >
                <View
                  style={{
                    backgroundColor: `${item.color}`,
                    width: 63,
                    height: 25,
                    marginHorizontal: 3,
                    borderRadius: 5,
                    bottom: 0,
                  }}
                ></View>
              </TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  color: "#aaa",
                  fontSize: 10,
                  paddingTop: 5,
                }}
              >
                {item.value}
              </Text>
            </View>
          );
        }}
        contentContainerStyle={{
          justifyContent: "flex-start",
          //   backgroundColor: "red",
          width: "100%",
          alignItems: "center",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    height: 100,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    color: "#aaa",
    fontWeight: "700",
  },
  unit: {
    fontWeight: "600",
    color: "#aaa",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#aaa8",
    paddingHorizontal: 25,
    paddingVertical: 5,
    textAlign: "center",
  },
});
