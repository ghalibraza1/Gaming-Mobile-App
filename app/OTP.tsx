import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import EmailInputPage from './EInput';
import { useNavigation } from '@react-navigation/native';

export default function OTP() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigation();

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 4) {
      alert(`OTP Verified: ${enteredOtp}`);
    } else {
      alert('Please enter a valid 4-digit OTP.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/images.jpeg')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.subtitle}>A 4-digit code has been sent to your phone.</Text>

        <View style={styles.inputContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleInputChange(text, index)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>

        <Text style={styles.resendText}>Didn’t receive the code?</Text>
        <TouchableOpacity onPress={()=> navigate.navigate("EmailInputPage")}>
          <Text style={styles.resendLink}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#8A2BE2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendText: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 5,
  },
  resendLink: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
