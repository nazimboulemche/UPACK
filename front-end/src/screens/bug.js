import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';


export function Bugg({navigation}) {
    return (
    <View>
          <Text style={styles.txt}>Signaler un bug</Text>
        <View style={styles.all}> 
           <Text style={styles.txtt}>Motif:</Text>
           <TextInput style={styles.input} />

           <Text style={styles.txtt}>Description:</Text>
           <TextInput style={styles.inputone} />
        </View>

        <TouchableOpacity style = {styles.ConnexionButton}>
               <Text style = {styles.ConnexionButtonText}> ENVOYER </Text>
            </TouchableOpacity>
    </View>
    )
};

const styles = StyleSheet.create({
    txt: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 50,
    },
    txtt: {
       fontWeight: '500',
       marginBottom: 10,
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
     input: {
         height: 40,
         borderColor: 'grey',
         borderWidth: 1,
         marginBottom: 10,
         width: 220,
     },
     inputone: {
         height: 100,
         borderColor: 'grey',
         borderWidth: 1,
         width: 220,
     },
     all: {
        alignContent: 'flex-start',
        marginLeft: '20%',
     }
});


export default Bugg;