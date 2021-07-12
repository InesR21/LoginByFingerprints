import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default ({imagepPath , width, height}) => {
  return <Image source={imagepPath} style={[styles.image, {width:width, height:height}]} />
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 8,
  },
})