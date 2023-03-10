import { observer } from "mobx-react-lite"
import React, { FC, useCallback, useMemo, useRef } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Text } from "../components"
import { isRTL } from "../i18n"
import { colors, spacing, typography } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import CustomField from "../components/CustomField"

import CustomBottomSheet from "../components/BottomSheet"

const welcomeLogo = require("../../assets/images/logo.png")
const welcomeFace = require("../../assets/images/welcome-face.png")

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {


  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Text style={$logo} tx="welcomeScreen.logo" preset="heading" size="xxl" />

        <CustomField />

        <Image style={$welcomeFace} source={welcomeFace} resizeMode="contain" />
      </View>
  
<CustomBottomSheet />

    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "#54487a",
  paddingVertical: spacing.massive,
  paddingHorizontal: spacing.large,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  // justifyContent: "center",
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "43%",
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.large,
  justifyContent: "space-around",
}

const $welcomeFace: ImageStyle = {
  height: 169,
  width: 269,
  position: "absolute",
  bottom: -47,
  right: -80,
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}

const $logo: TextStyle = {
  color: colors.palette.neutral100,
  fontWeight: "bold",
  fontFamily: typography.primary.bold,
}

const $contentContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
}
