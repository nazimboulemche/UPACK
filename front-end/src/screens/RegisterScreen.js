import React, { useState, useEffect} from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView, Platform, Image} from 'react-native'
import { Text } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator} from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { firstnameValidator } from '../helpers/firstnameValidator'
import { genderValidator } from '../helpers/genderValidator'
import * as ImagePicker from 'expo-image-picker'




const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [firstname, setFirstname] = useState({ value: '', error: '' })
  const [date, setDate] = useState(new Date(1598051730000))
  const [showDate, setShowDate] = useState(false)
  const [gender, setGender] = useState({value: '', error: '' })
  const [image, setImage] = useState(null);

 useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []); 
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
  
  
  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const firstnameError = firstnameValidator(firstname.value)
    const genderError = genderValidator(gender.value)
    
    

    if (emailError || passwordError || nameError || firstnameError || genderError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setFirstname({...firstname, error: firstnameError})
      setGender({...gender, error: genderError})
      return
    }
   
    navigation.navigate("dashboard")
  }
   

  function showDateTimePicker() {
    setShowDate(true)
  }

  function onDateChange(_, newDate) {
    setShowDate(false)

    if (newDate) {
      setDate(newDate)
    }
  }
  return (
    <ScrollView>
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Créer un compte</Header>
      <TextInput
        label="Prénom"
        returnKeyType="next"
        value={firstname.value}
        onChangeText={(text) => setFirstname({ value: text, error: '' })}
        error={!!firstname.error}
        errorText={firstname.error}
      />
      <TextInput
        label="Nom"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      /> 
      <TextInput
        label="birthdate"
        value={`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
        showSoftInputOnFocus={false}
        onFocus={showDateTimePicker}
      /> 
      {showDate && (<DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />)}
          <TextInput
        label="Homme | Femme | N/A"
        returnKeyType="next"
        value={gender.value}
        onChangeText={(text) => setGender({ value: text, error: '' })}
        error={!!gender.error}
        errorText={gender.error}
      /> 
      <Text>Ajouter une photo de votre carte d'identité </Text>
      <Button 
      title="Pick an image from camera roll" 
      mode="contained"
      onPress={pickImage} 
      style={{ marginTop: 24 }} >Cliquer pour Ajouter</Button>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Mot de passe"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Créer un compte
      </Button>
      <View style={styles.row}>
        <Text>Avez-vous déjà un compte ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
          <Text style={styles.link}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </Background>
    </ScrollView>
  )
      
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.text,
  },
})

export default RegisterScreen
