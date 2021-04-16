import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import React from 'react'

export function Edit({navigation}) {
    return(
        <View>
              <Text style={styles.header}>Modifier le profile</Text>
              <FontAwesome5 name={'user-edit'} size={60} color = '#000' style={styles.icon} />

              <View style={styles.all}>
                  <Text style={styles.txt}>Nom: *</Text>
                  <TextInput style={styles.input}/>

                  <Text style={styles.txt}>Prenom: *</Text>
                  <TextInput style={styles.input} />

                  <Text style={styles.txt}>Adresse mail: *</Text>
                  <TextInput style={styles.input}/>

                  <Text style={styles.txt}>Numéro de telephone: *</Text>
                  <TextInput style={styles.input} />
              </View>
              <TouchableOpacity style = {styles.ConnexionButton} >
                <Text style = {styles.ConnexionButtonText}> VALIDER </Text>
               </TouchableOpacity>
       </View>
       
    )
}

const styles = StyleSheet.create({ 
   header: {
    alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 50,
   },

   icon: {
       alignSelf: 'center',
       marginBottom: 50,
   },

   txt: {
       fontWeight: '500',
       marginTop: 20,
       marginBottom: 10,
   },

   input: {
       width: 200,
       height: 30,
       borderColor: '#e9c46a',
       borderWidth: 1,

   },
   
   all: {
       alignContent: 'flex-start',
       marginLeft: '25%',
   },
   ConnexionButton: {
    backgroundColor: '#EB5D35',
    padding: 10,
    marginTop: 30,
    height: 40,
    marginRight: 80,
    marginLeft: 80,
    borderRadius: 70,
    
 },
 ConnexionButtonText:{
    color: 'white',
    alignSelf:'center',
 },
})

export default Edit ;