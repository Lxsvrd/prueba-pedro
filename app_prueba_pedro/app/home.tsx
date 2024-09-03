import React, { useState } from 'react';
import { Link } from 'expo-router';
import { StatusBar } from 'react-native';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function Home() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28282e' }}>
      <StatusBar barStyle="light-content" backgroundColor="#28282e" />
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={{
                uri: 'https://i.ibb.co/gTFkKVp/Pok-Ball-icon-svg.png',
              }} />

            <Text style={styles.title}>
              Iniciar sesión en tu <Text style={{ color: '#f98284' }}>Pokédex</Text>
            </Text>

            <Text style={styles.subtitle}>
              ¡Accedé a todos los Pokémon que encontraste y más!
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Correo electrónico</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="ash@ejemplo.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Contraseña</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password} />
            </View>

            <View style={styles.formAction}>
            <Link href={'/todoMain'} asChild>
              <Pressable>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Iniciar sesión</Text>
                </View>
              </Pressable>
            </Link>
            </View>
          </View>
        </KeyboardAwareScrollView>

        <Pressable
          onPress={() => {
            // handle link
            Alert.alert('Test funcional 2');
          }}
          style={{ marginTop: 'auto' }}>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 31,
    fontWeight: '700',
    color: '#fff7e4',
    marginBottom: 6,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f98284',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff7e4',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff7e4', /* no tocar x dios */
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff7e4',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#',
    borderWidth: 1,
    borderColor: '#fff7e4',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#f98284',
    borderColor: '#f98284',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff7e4',
  },
});