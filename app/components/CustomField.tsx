import { View, Text, TextInput, StyleSheet } from "react-native"
import React from "react"
import { spacing, typography, colors } from "../theme"
import Ionicons from "@expo/vector-icons/Ionicons"
import { AntDesign } from "@expo/vector-icons"

export default function CustomField() {
  return (
    <View style={styles.inputContainer}>
      <AntDesign name="link" size={24} color="grey" />

      <TextInput style={styles.linkinput} placeholder="Paste link here" />
    </View>
  )
}

// style

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    backgroundColor: colors.palette.neutral400,
    borderRadius: spacing.small,
    elevation: 4,
    flexDirection: "row",
    marginVertical: spacing.large,
    padding: spacing.medium,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  linkinput: {
    fontSize: 20,
    height: 50,
    width: "90%",
    marginLeft: spacing.small,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
})
