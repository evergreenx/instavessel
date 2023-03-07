import BottomSheet from "@gorhom/bottom-sheet"

import { Text, View, ViewStyle , useWindowDimensions } from "react-native"
import React, { useCallback, useMemo, useRef } from "react"
import { TabView, SceneMap } from 'react-native-tab-view';




const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);


const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
export default function CustomBottomSheet() {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ["10%", "90%"], [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index)
  }, [])

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={$contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>

      <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    </BottomSheet>
  )
}

const $contentContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
}
