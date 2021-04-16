import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SharePopUp from '../components/share'

export default function annonceDetail({navigation}) {
    return (
    <View style = {styles.container}>

        <View style = {styles.option}>
            <Icon name="arrow-left" size={30} color = '#EB5D35'/>
            <Text style={styles.textTitle}>Annonce détaillé</Text>
            <Icon name="gear" size={30} color = '#EB5D35'/>
        </View>   
        <Text style ={styles.text}>Nom</Text>

        <Text style ={styles.text}>Prénom</Text>

        <Text style ={styles.text}>Numéro de téléphone</Text>      

        <Text style ={styles.text}>Description de l'objet</Text>
           
        <View style ={styles.contact}>
            <TouchableOpacity style = {styles.ConnexionButton}>
               <Text style = {styles.ConnexionButtonText}> JE LE CONTACTE</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <SharePopUp>
                <Icon name="exclamation-circle" size={30} color = '#EB5D35'/>
              </SharePopUp>
            </TouchableOpacity>
        </View>
    
        <View style={styles.icons}>
           <TouchableOpacity> <Icon name="home" size={30} color ='#EB5D35' />  </TouchableOpacity> 
           <TouchableOpacity> <Icon name="plus-circle" size={30} color= '#EB5D35' />  </TouchableOpacity>
           <TouchableOpacity> <Icon name="comments" size={30} color= '#EB5D35' />  </TouchableOpacity>
           <TouchableOpacity> <Icon name="list" size={30} color= '#EB5D35' />  </TouchableOpacity>
        </View>

    </View>

       
  );
} 


const styles = StyleSheet.create({
    

    container: {
        flex: 1,
        padding: 24,
        
    },

    input: {
        margin: 15,
        height: 40,
        
     },

    text : {
        marginTop: 50,
        color : 'grey'
    },
    contact: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    font: {
        justifyContent: 'space-around',
        flexWrap: "wrap",
     },

     ConnexionButton: {
        backgroundColor: '#EB5D35',
        padding: 10,
        marginTop: 1,
        height: 40,
        marginRight: 80,
        marginLeft: 80,
        borderRadius: 70,
     },
     ConnexionButtonText:{
        color: 'white',
        alignSelf:'center',
     },

     option: {
        flexDirection: "row",
        flex: 1,
        justifyContent: 'space-between',
     },

     textTitle: {
        fontWeight: 'bold'
     },

     icons: {
        flex: 1,
        marginBottom: 20,
        padding: 50,
    
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexDirection: 'row',
    
      },
     
  });
  

