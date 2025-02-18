```javascript
// FlatListBugSolution.js
import React, { memo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Item = memo(({ item }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
    {/* ... other complex components ... */}
  </View>
));

const data = [/* ... large dataset ... */];

const FlatListOptimized = () => (
  <FlatList
    data={data}
    renderItem={({ item }) => <Item item={item} />}
    keyExtractor={(item) => item.id}
    getItemLayout={(data, index) => ({
      length: 80,
      offset: 80 * index,
      index,
    })}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
  />
);

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});

export default FlatListOptimized;
```