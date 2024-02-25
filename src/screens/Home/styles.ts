import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  eventTitle: {
    marginTop: 48,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FDFCFE',
    fontFamily: 'Roboto',
  },
  eventSubtitle: {
    fontSize: 16,
    color: '#6B6B6B',
  },
  form: {
    display: 'flex',
    marginTop: 34,
    width: '100%',
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 28,
    color: '#fff',
  },
  input: {
    backgroundColor: '#1F1E25',
    width: 317,
    height: 56,
    borderRadius: 5,
    paddingLeft: 16,
    fontSize: 14,
    color: '#fff',
  },
  listTitle: {
    marginTop: 40,
    marginBottom: 18,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FDFCFE',
  },
  textListEmpty: {
    color: '#FDFCFE',
    fontSize: 14,
    textAlign: 'center',
  },
});
