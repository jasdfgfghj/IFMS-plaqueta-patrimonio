import React, { useState, useRef } from "react";
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import { captureRef } from "react-native-view-shot";
import * as Sharing from 'expo-sharing';

const Home = () => {
    const [inputText, setInputText] = useState('');
      
    const screenShotViewRef = useRef(null);

    //essa função aqui tira screenshot apenas do componente do Código de Barras
    const takeScreenShot2 = async () => {
        const result = await captureRef(screenShotViewRef, {
            result: 'tmpfile',
            quality: 1,
            format: 'png',
        });

        console.log('Imagem salva localmente', result);
        await Sharing.shareAsync(result);
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'android' ? 'height' : undefined}
        >
        
            <View style={styles.container}>
                <View ref={screenShotViewRef} style={styles.main}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo.png')}
                    />
                    <View style={styles.bloco}>
                        <Text style={styles.title}>PATRIMÔNIO</Text>
                        <Image
                            style={styles.codigo}
                            source={{
                                uri: `https://barcode.tec-it.com/barcode.ashx?data=${("00000000" + inputText).slice(-8)}&code=Code39&dpi=600`,
                            }}
                        />
                    </View>
                </View>
                
                <View style={styles.footer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Código de barras"
                        value={inputText}
                        autoCapitalize="characters"
                        autoCorrect={false}
                        onChangeText={(inputText) => setInputText(inputText)}
                />
                    
                    <RectButton style={styles.button} onPress={takeScreenShot2}>
                        <View style={styles.buttonIcon}>
                            <Text>
                                <Icon name="arrow-right" color="#FFF" size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>Exportar</Text>
                    </RectButton>
                </View>
                
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 60,
        alignItems: 'center',
    },

    main: {
        display: 'flex',
        flexDirection: 'row',
        width: 320,
        height: 125,
        borderWidth: 1.3,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: 'white',
    },

    codigo: {
        width: 200,
        height: 75,
    },
    
    logo: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        width: 110,
        height: 110,
    },
    bloco: {
        display: 'flex',
        flexDirection: 'column',
    },

    title: {
        color: '#030303',
        fontSize: 24,
        fontFamily: 'Poppins_700Bold',
        textAlign: 'center',
        maxWidth: 268,
        marginTop: 2,
    },

    footer: {
        marginTop: 20,
    },


    input: {
        height: 55,
        width: 300,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        backgroundColor: '#0685D2',
        height: 55,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonIcon: {
        height: 55,
        width: 60,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }

});
     
export default Home;