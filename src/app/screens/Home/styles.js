import { StyleSheet } from 'react-native';
import { black, gray, blue, white } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
    padding: 10
  },
  mainButton: {
    color: black,
    fontWeight: 'bold',
    fontSize: 12
  },
  separator: {
    height: 5
  },
  list: {
    marginBottom: 10
  },
  button: {
    backgroundColor: blue,
    borderRadius: 10
  },
  buttonTextStyle: {
    color: white
  }
});
