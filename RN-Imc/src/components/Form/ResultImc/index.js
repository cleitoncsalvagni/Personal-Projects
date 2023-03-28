import React from 'react';
import { View, Text, Share, TouchableOpacity } from 'react-native';
import styles from './style';

export default function ResultImc(props) {

  const onShare = async () => {
    const result = await Share.share({
      message: "Seu IMC é: " + props.ResultImc,
    });
  }

 return (
   <View  style={styles.ResultImc}>
    <Text style={styles.information}>{props.messageResultImc} </Text>
    <Text style={styles.numberImc}>{props.ResultImc} </Text>
    <View style={styles.boxShareButton}>
      <TouchableOpacity onPress={onShare} style={styles.share}>
        <Text style={styles.sharedText}>Compartilhar</Text>
      </TouchableOpacity>
    </View> 
   </View>

//Teste de compartilhamento

  );
}