import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';


export function Delete() {
    return (
         <View>
           <Text style={styles.txt}>Supprimer le compte</Text>

           <View style={styles.all}>
               <Text style={styles.txtt}>Entrer le mot de passe:</Text>

               <TextInput style={styles.input} secureTextEntry={true}/>
            </View>
            <TouchableOpacity style = {styles.ConnexionButton} >
                <Text style = {styles.ConnexionButtonText}> VALIDER </Text>
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
        width: 200,
        height: 30,
        borderColor: '#e9c46a',
        borderWidth: 1,
    },
    all: {
        alignContent: 'flex-start',
        marginLeft: '25%',
    },
});

export default Delete

