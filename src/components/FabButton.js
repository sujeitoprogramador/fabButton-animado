import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
export default class FabButton extends Component{

  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1


    Animated.spring(this.animation, {
      toValue,
      friction: 5,
    }).start();

    this.open = !this.open;
  }

  render(){
    const pinStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -80]
          })
        }
      ]
    }

    const heartStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -140]
          })
        }
      ]
    }


    const rotation ={
      transform:[
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"]
          })
        }
      ]
    }
    return (
         <View style={[styles.container, this.props.style]}>
           <TouchableWithoutFeedback onPress={()=> alert('LIKE!')}>
             <Animated.View style={[styles.button, styles.secondary, heartStyle]}>
               <AntDesign name="hearto" size={20} color="#F02A4B" />
             </Animated.View>
           </TouchableWithoutFeedback>
      
           <TouchableWithoutFeedback onPress={ ()=> alert('LOCALIZAR!')}>
             <Animated.View style={[styles.button, styles.secondary, pinStyle]}>
               <Entypo name="location-pin" size={20} color="#F02A4B" />
             </Animated.View>
           </TouchableWithoutFeedback>
      
           <TouchableWithoutFeedback onPress={this.toggleMenu}>
             <Animated.View style={[styles.button, styles.menu, rotation]}>
               <AntDesign name="plus" size={24} color="#FFF" />
             </Animated.View>
           </TouchableWithoutFeedback>
         </View>
      
        );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    position: 'absolute',
  },
  button:{
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#F02A4B',
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 }
  },
  menu:{
    backgroundColor: '#F02A4B'
  },
  secondary:{
    width: 48,
    height: 48,
    borderRadius: 46 / 2 ,
    backgroundColor: '#FFF'
  }
});


// export default function FabButton( props ) {
//  return (
//    <View style={[styles.container]}>
//      <TouchableHighlight>
//        <Animated.View style={[styles.button, styles.secondary]}>
//          <AntDesign name="hearto" size={20} color="#F02A4B" />
//        </Animated.View>
//      </TouchableHighlight>

//      <TouchableHighlight>
//        <Animated.View style={[styles.button, styles.secondary]}>
//          <Entypo name="location-pin" size={20} color="#F02A4B" />
//        </Animated.View>
//      </TouchableHighlight>

//      <TouchableHighlight>
//        <Animated.View style={[styles.button, styles.menu]}>
//          <AntDesign name="plus" size={24} color="#FFF" />
//        </Animated.View>
//      </TouchableHighlight>
//    </View>

//   );
// }