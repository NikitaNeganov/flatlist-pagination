import React from 'react';
import { View, Text Dimensions } from 'react-native';

import { Paginator } from 'components';

const Component = () => {
  const itemWidth = Dimensions.get('window').width;
  const data = [{ key: 1 }, { key: 2 }];
  const renderItem = ({ item }) => (
    <View style={{ width: itemWidth }}>
      <Text>
        {item.key}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Paginator
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          itemWidth={itemWidth}
        />
      </View>
    </View>
  );
};

export default Component;