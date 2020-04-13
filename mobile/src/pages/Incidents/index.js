import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png'
import styles from './styles';
import darkStyles from './darkStyles';

import api from '../../services/api';
import HeaderMode from '../../components/HeaderMode/';

export default function Incidents() {
    const nav = useNavigation();

    const [styled, setStyled] = useState(styles);
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    async function loadIncidents() {
        try {

            if(loading){
                return;
            }

            if(total > 0 && incidents.length === total){
                return;
            }

            setLoading(true);

            const response = await api.get('incidents',{
                params:{
                    page
                }
            });
            setIncidents([... incidents, ... response.data]);
            setTotal(response.headers['x-total-count']);
            setPage(page + 1);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    function navigateToDatail(incident) {
        nav.navigate('Detail', {incident});
    }

    return (
        <View style={styled.container}>
        <HeaderMode text="DarkMode" arrStyles={[styles, darkStyles]} changeble={setStyled} />

            <View style={styled.header}>
                <Image source={logoImg} />
                <Text style={styled.headerText}>
                    Total de <Text style={styled.headerTextBolt}>{total} casos</Text>.
                </Text>
            </View>
            <Text style={styled.title}>Bem-vindo!</Text>
            <Text style={styled.description}>Escolha um dos casos abaixo e salve o dia!</Text>

            <FlatList
                style={styled.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View >

                        <View style={styled.incident}>

                            <Text style={styled.incidentProperty}>ONG:</Text>
                            <Text style={styled.incidentValue}>{incident.name}</Text>

                            <Text style={styled.incidentProperty}>CASO:</Text>
                            <Text style={styled.incidentValue}>{incident.title}</Text>

                            <Text style={styled.incidentProperty}>VALOR:</Text>
                            <Text style={styled.incidentValue}>
                                {
                            
                                    Intl.NumberFormat('pt-BR', {style : 'currency',   currency:'BRL'})                           
                                    .format(incident.value)
                                }
                            </Text>

                            <TouchableOpacity
                                style={styled.detailsButton}
                                onPress={()=>navigateToDatail(incident)}
                            >
                                <Text style={styled.detailsButtonText}>Ver mais detalhes</Text>
                                <Feather name="arrow-right" size={16} color='#E02041' />
                            </TouchableOpacity>

                        </View>

                    </View>
                )}
            />
        </View>
    );
}