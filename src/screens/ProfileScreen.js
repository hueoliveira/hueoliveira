
import React, {Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet

} from 'react-native';
import withLoader from '../redux/actionCreator/withLoader';
import withToast from '../redux/actionCreator/withToast';

import AppImages from '../assets/images';
import StyleConfig from '../assets/styles/StyleConfig';
import { SafeAreaView, View1CC, Devider, CText,CTextColor } from '../components/common'; 
class ProfileScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <SafeAreaView {...this.props}>
            <View1CC {...this.props} >
                <CText fontSize={StyleConfig.countPixelRatio(16)}>ProfileScreen</CText>
            </View1CC>
            </SafeAreaView>
        );
    }
}


export default withLoader(withToast(ProfileScreen)) ;
const styles = StyleSheet.create({
    

});