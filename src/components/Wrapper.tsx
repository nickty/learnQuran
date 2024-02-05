import React, {ReactNode} from 'react';
import {StatusBar, View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

import Loading from './Loading';

interface WrapperProps {
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  children?: ReactNode;
}

function Wrapper(props: WrapperProps) {
  return (
    <View style={[styles.containerStyle, props.style]}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {props.loading && <Loading />}
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
});

export {Wrapper};
