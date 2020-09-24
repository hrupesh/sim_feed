import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { loadChemicals } from "../../actions";
import { connect } from "react-redux";

function Strips({
  chemicalsisLoading,
  chemicals,
  chemicalsError,
  loadChemicals,
}) {
  useEffect(() => {
    loadChemicals();
    console.log(chemicalsisLoading);
    console.log(chemicals);
    console.log(chemicalsError);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.nextContainer}>
        <TouchableOpacity>
          <View style={styles.nextbtn}>
            <Text style={styles.next}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Test Strip</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 15,
  },
  nextContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  nextbtn: {
    backgroundColor: "#888a",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  next: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "blue",
  },
});

const mapStateToProps = ({
  chemicalsisLoading,
  chemicals,
  chemicalsError,
}) => ({
  chemicalsisLoading,
  chemicals,
  chemicalsError,
});

const mapDispatchToProps = (dispatch) => ({
  loadChemicals: () => dispatch(loadChemicals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Strips);
