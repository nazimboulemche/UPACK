import React from 'react';
import { Share, View, Button,TouchableOpacity } from 'react-native';


const SharePopUp = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View onPress={onShare} style={{ marginTop: 50 }}>
      <Button onPress={onShare} title="Share" color="#EB5D35"/>
    </View>
  );
};

export default SharePopUp;