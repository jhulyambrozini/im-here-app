import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';

type CardParticipantProps = {
  participantName: string;
  onRemove: () => void;
};

export const CardParticipante = ({
  participantName,
  onRemove,
}: CardParticipantProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{participantName}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
