import {StyleSheet} from 'react-native';

let boxGeneral = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 0.5,
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  box3: {
    backgroundColor: 'black',
    ...boxGeneral,
  },
  box4: {
    backgroundColor: 'brown',
    ...boxGeneral,
  },
  box5: {
    backgroundColor: 'gray',
    ...boxGeneral,
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
  f: {
    fontSize: 28,
  },
});

export default styles;
