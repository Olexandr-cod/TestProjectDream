import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  blur: {
    flex: 1,
    justifyContent: 'center',
  },
  containerPosition: {
    flex: 1,
    justifyContent: 'space-between',
  },
  flexibly: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    height: '50%',
    width: '100%',
    flex: 1,
    backgroundColor: 'silver',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
