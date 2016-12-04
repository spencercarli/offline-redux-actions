import React, { Component } from 'react';
import { View, Text, ScrollView, NetInfo } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'
import { connect } from 'react-redux';

import { requestPerson, connectionState } from './actions';

class NameList extends Component {
  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', (isConnected) => {
      this.props.dispatch(connectionState({ status: isConnected }));
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <List>
            {
              this.props.people.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.name}
                />
              ))
            }
          </List>
        </ScrollView>
        <Icon
          raised
          name='add'
          color='#51b9d3'
          reverse
          onPress={() => this.props.dispatch(requestPerson({ index: this.props.personIndex }))}
          containerStyle={{ position: 'absolute', right: 20, bottom: 20 }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people,
    personIndex: state.personIndex,
  };
};

export default connect(mapStateToProps)(NameList);
