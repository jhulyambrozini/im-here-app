import { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { CardParticipante } from '../../components/CardParticipant/CardParticipant';
import { styles } from './styles';

const HomeScreen = () => {
  const [participanteName, setParticipantName] = useState('');
  const [participantsList, setParticipantsList] = useState<string[]>([]);

  function handleAddParticipant() {
    if (participantsList.includes(participanteName)) {
      Alert.alert(
        'Nome já incluso na lista',
        'Essa pessoa já chegou no evento.'
      );

      return;
    }

    setParticipantsList(prev => [...prev, participanteName]);
    setParticipantName('');
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Remover o(a) ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setParticipantsList(prev =>
            prev.filter(participant => participant !== name)
          ),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.eventTitle}>Nome do evento</Text>
        <Text style={styles.eventSubtitle}>Sexta, 4 de Novembro de 2022.</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
            value={participanteName}
            onChangeText={setParticipantName}
          ></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddParticipant}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.listTitle}>Participantes</Text>

        <FlatList
          data={participantsList}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <CardParticipante
              key={item}
              participantName={item}
              onRemove={() => handleRemoveParticipant(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.textListEmpty}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista
              de presença.
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
