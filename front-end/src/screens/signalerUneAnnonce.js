import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function signalerUneAnnonce({navigation}) {
    return (
    <View style = {styles.container}>
        <View >
            <Icon name="arrow-left" size={30} color = '#EB5D35'/>
            <Text style ={styles.title}>Signaler une Annonce</Text>
        </View>
            
        <Text style ={styles.text}>Motif:</Text>
            <TextInput  style = {styles.input}
               placeholder = "  écrire ici  "
               placeholderTextColor = "gray"
               autoCapitalize = "none"
            />
        
        <Text style ={styles.text}>Description du motif:</Text>
        <TextInput  style = {styles.inputDescrObjet}
               placeholder = "  écrire ici  "
               placeholderTextColor = "gray"
               autoCapitalize = "none"
            />
        <TouchableOpacity style = {styles.ConnexionButton}>
               <Text style = {styles.ConnexionButtonText}> ENVOYER </Text>
        </TouchableOpacity>
    
    </View>

       
  );
} 

const styles = StyleSheet.create({
    title : {
        alignSelf: "center",
    },
    
    container: {
        flex: 1,
        padding: 24,
        
    },

    input: {
        margin: 15,
        height: 40,
        borderColor: 'grey',
        borderWidth: 1
     },

     inputDescrObjet: {
        height: 100,
        borderColor: 'grey',
        borderWidth: 1,
        marginTop: 10,
    },

    
    
    text : {
        marginTop: 50,
        color : 'grey'
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

    

  });
  