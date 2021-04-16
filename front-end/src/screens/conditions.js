import { Text, View, StyleSheet } from 'react-native';
import React from 'react'

export function Condition() {
   return (
       <View>
          <Text style={styles.txt}>Condition générales de l'utilisation</Text>
          <Text style={styles.txtt}>Ces règles s’appliquent évidemment à tous les utilisateurs de UPACK : <br />

           * Vous devez avoir 13 ans ou plus <br />
           * Vous ne devez pas poster de contenu violent <br />
           * Vous ne devez pas poster de photos/vidéos contenant de la nudité <br />
           * Vous ne devez pas poster d’informations personnelles d’autres individu 
                  « Officiellement », vous détenez les droits d’auteur de vos photos et vidéos. Mais Instagram peut les utiliser et vendre un droit d’utilisation de vos photos , partout dans le monde, sans que vous ne puissiez réclamer quoi que ce soit.
                  Instagram peut utiliser et partager vos informations personnelles avec les « entreprises connectées avec Instagram » : nom, email, école, endroit où vous vivez, photos, numéro de téléphone, Likes et Dislikes, où vous allez, qui sont vos amis, à quelle fréquence vous utilisez Instagram et toute autre information (anniversaire, contacts fréquents en DM…).
        </Text>
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
        fontWeight: '500'
    }
})

export default Condition