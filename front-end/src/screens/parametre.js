import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import React from 'react'

export function Parametre({navigation}) {
    return (
        <View style={styles.top}>
           <Text style={styles.header}>PARAMÈTRES</Text>
         <View style={styles.all}>
             <View>
              <TouchableOpacity style={styles.fix} onPress={() => navigation.navigate('EditProfile')}> <FontAwesome5 name={'user-alt'} size={30} color = '#000' color = '#EB5D35' /> <Text style={styles.txt}>Modifier le profile</Text>  </TouchableOpacity>
              <TouchableOpacity style={styles.fix} onPress={() => navigation.navigate("ReportBug")}> <Icon name="exclamation-triangle" size={30} color = '#EB5D35'/>  <Text style={styles.txt}>Signaler un bug</Text></TouchableOpacity>
              <TouchableOpacity style={styles.fix} onPress={() => navigation.navigate('APropos')}>  <Icon name="exclamation-circle" size={30} color = '#EB5D35'/> <Text style={styles.txt}>A Propos</Text></TouchableOpacity>
             </View>

             <View>
              <TouchableOpacity style={styles.fix} onPress={() => navigation.navigate('LogOut')}> <Icon name="arrow-left" size={30} color = '#EB5D35'/> <Text style={styles.txt}>Déconnexion</Text></TouchableOpacity>
              <TouchableOpacity style={styles.fix} onPress={() => navigation.navigate('DeleteAccount')}> <Icon name="user-times" size={30} color = '#EB5D35'/><Text style={styles.txt}>Supprimer le compte</Text></TouchableOpacity>
             </View>
         </View>
        </View>
 
    )
};



const styles = StyleSheet.create({ 
    header: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 100,
    },
    txt : {
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    
    fix : {
       
        flexDirection: 'row',
        marginBottom: 20,
      
    },
    
    top : {
        justifyContent: 'flex-start',
    },
    all: {
        alignContent: 'flex-start',
        marginLeft: '20%',
     }
})

export default Parametre ;