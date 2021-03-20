import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  box1: {
    flex: 0.5,
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  box3: {
    backgroundColor: 'black',
  },
  box4: {
    backgroundColor: 'brown',
  },
  box5: {
    backgroundColor: 'gray',
  },
  boxGeneral: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 0.5,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteColor: {
    color: '#fff',
  },
});

export default styles;
