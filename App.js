import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'
import fetchPeopleFromAPI from './src/actions'

const App = (props) => {
  const {
      container,
      text,
      button,
      buttonText
  } = styles;

  const { people, isFetching } = props.people;

  return (
      <View style={container}>
        <Text style={text}>
          Redux app
        </Text>
        <TouchableOpacity
            onPress={props.getPeople}
            style={button}>
          <Text style={buttonText} >Fetch data</Text>
        </TouchableOpacity>
          {
            isFetching &&
                <Text>
                  Loading
                </Text>
          }
          {
            people.length ? (
                people.map((person, index) => {
                  return (
                      <View key={index}>
                        <Text>
                          Name: {person.name}
                        </Text>
                        <Text>
                          Birth Year: {person.birth_year}
                        </Text>
                      </View>
                  )
                } )
            ) : null
          }
      </View>
  )
};

styles = StyleSheet.create({
    container:{
      marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#0b7eff',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
      color: '#ffffff',
    }
});

function mapStateToProps(state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
