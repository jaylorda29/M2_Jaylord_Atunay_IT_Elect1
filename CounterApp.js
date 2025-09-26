import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Button title="Increment" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrement" onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

export default CounterApp;
