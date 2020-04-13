import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import logoImg from '../../assets/logo.png'
import styles from './styles';
import darkStyles from './darkStyles';
import HeaderMode from '../../components/HeaderMode/';

import * as MailComposer from 'expo-mail-composer';

export default function Detail() {
    const [styled, setStyled] = useState(styles);

    const nav = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)
        }`

    function navigateBack() {
        nav.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        });
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }
    return (

        <View style={styled.container}>
        <HeaderMode text="DarkMode" arrStyles={[styles, darkStyles]} changeble={setStyled} />

            <View style={styled.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
            <View style={styled.incident}>
                <Text style={[styled.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styled.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styled.incidentProperty}>CASO:</Text>
                <Text style={styled.incidentValue}>{incident.title}</Text>

                <Text style={styled.incidentProperty}>VALOR:</Text>
                <Text style={styled.incidentValue}>
                    {

                        Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)
                    }
                </Text>
            </View>
            <View style={styled.contactBox}>
                <Text style={styled.heroTitle}>Salve o dia!</Text>
                <Text style={styled.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styled.heroDescription}>Entre em contato:</Text>
                <View style={styled.actions}>
                    <TouchableOpacity style={styled.action} onPress={sendWhatsApp}>
                        <Text style={styled.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styled.action} onPress={sendMail}>
                        <Text style={styled.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}