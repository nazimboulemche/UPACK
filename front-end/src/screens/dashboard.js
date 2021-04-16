import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import React from 'react'

export function Dashboard({navigation}) {
    return (
        <View>
       
           <View style={styles.top}>
              <View style={styles.space}> 
                <Text style={styles.txt}>U</Text>
                <Text style={styles.txtt}>PACK</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Parametres')}> <Icon style={styles.touch} name="gear" size={30} color= '#EB5D35'  /> </TouchableOpacity>
           </View>
           
           <View style={styles.icons}>
           <TouchableOpacity> <Icon style={styles.touch} name="home" size={30} color ='#e9c46a' />  </TouchableOpacity> 
           <TouchableOpacity onPress={() => navigation.navigate('signalerVolOuPerte')}> <Icon style={styles.touch} name="plus-circle" size={30} color= '#EB5D35' />  </TouchableOpacity>
           <TouchableOpacity> <Icon style={styles.touch} name="comments" size={30} color= '#EB5D35' />  </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('signalerUneAnnonce')}>  <Icon style={styles.touch} name="list" size={30} color= '#EB5D35'  />  </TouchableOpacity>
           </View>
        </View>
        
    );
}

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
  icons: {
    flex: 1,
    marginBottom: 20,
    padding: 50,
    
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20
  },
  space: {
    flexDirection: 'row',
    
    
  }
  });

export default Dashboard ;
