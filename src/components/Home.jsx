import { View, Text,StyleSheet,ImageBackground ,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    const handleButton=()=>{
        navigation.navigate("Movie")
    }
  return (
    <ImageBackground source={require('../../assets/landingpage.jpg')} style={styles.backgroundImage}    >
    <View style={styles.maindiv}
    >
      <Text style={{textAlign:'center'}}>Home</Text>
      <Button style={{innerHeight:100}} title='Explore Movies' 
      onPress={handleButton}
      />
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
maindiv:{
    padding:'20%',
    justifyContent:'center',
},
backgroundImage: {
    flex: 1, // Make the background image take up the entire screen
    resizeMode: 'cover', // Scale the image to cover the entire container
  },

})
export default Home