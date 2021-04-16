import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { View, StyleSheet} from 'react-native'

const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <View style={styles.space}> 
                <Text style={styles.txt}>U</Text>
                <Text style={styles.txtt}>PACK</Text>
              </View>
    <Paragraph>
      Pas de panique, on est là
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('loginscreen')}>
      Connexion
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('registerscreen')} color="#EB5D35"    >
      S'inscrire
    </Button>
  </Background>
)

const styles = StyleSheet.create({
  txt: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#EB5D35'
    
  },
  txtt: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#e9c46a'
  },
  space: {
    flexDirection: 'row',
    
    
  }
  });

export default StartScreen
