import React from 'react';
import LottieView from 'lottie-react-native';

export default class SantaAni extends React.Component {
    render(){
        return(
            <LottieView
            source={require('../assets/13015-santa-claus.json')}
            stye={{width:"60%"}}
            autoPlay loop/>
        )
    }
}
//123456789+1234567890+1234567890+1234567890+1234567890+1234567890+123456890+1234567890+1234567890