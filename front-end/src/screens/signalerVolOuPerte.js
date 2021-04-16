import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePickerExample from '../components/imgPicker'

export default function signalerVolOuPerte({navigation}) {
    return (
    <View style = {styles.container}>
      
      <View style = {styles.font}>
        
        <Icon name="arrow-left" size={30} color = '#EB5D35'/>
        <Text style ={styles.title}>Signaler une Perte/Vol</Text>
        <Icon name="gear" size={30} color = '#EB5D35'/>
      </View>  
        
        <Text style ={styles.text1}>Description de l'objet perdu</Text>
            <TextInput  style = {styles.inputDescrObjet}
               placeholder = "  Description de votre objet  "
               placeholderTextColor = "gray"
               autoCapitalize = "none"
            />
        
        <Text style ={styles.text}>Adresse à laquelle l'objet a été perdu:</Text>
        <TextInput  style = {styles.input}
               placeholder = "  écrire ici  "
               placeholderTextColor = "gray"
               autoCapitalize = "none"
            />
        
        <Text style ={styles.text}>Ville:</Text>
        <TextInput  style = {styles.input}
               placeholder = "  ex: Paris  "
               placeholderTextColor = "gray"
               autoCapitalize = "none"
            />
        
        <Text style ={styles.text}>Code postal:</Text>
        <TextInput  style = {styles.input}
               placeholder = "  ex: 75010  "
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               keyboardType={'numeric'}
            />
        <View style ={styles.fontImage}>
            <Text style ={styles.text}>Ajouter une photo de l'objet:</Text>
            <TouchableOpacity>
                <ImagePickerExample>
                    <Icon name="paperclip" size={30} color = '#EB5D35'/>
                </ImagePickerExample>
            </TouchableOpacity>
        </View>


        <TouchableOpacity style = {styles.ConnexionButton}>
            <Text style = {styles.ConnexionButtonText}> VALIDER </Text>
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
        borderWidth: 1,
     },

    inputDescrObjet: {
        height:100,
        borderColor: 'grey',
        borderWidth: 1,
        marginTop: 10,
    },

    inputDescription: {
        margin: 10,
        height: 40,
        borderColor: 'grey',
        borderWidth: 1
    },

    text : {
        marginTop: 15,
        color : 'grey'
    },

    text1: {
        marginTop: 5,
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

     font: {
        flexDirection: "row",
        flex: 1,
        justifyContent: 'space-between',
    },

    fontImage: {
        flexDirection: "row",
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 2,
    },
  });