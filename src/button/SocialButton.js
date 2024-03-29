import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { windowHeight } from "../utils/Dimentions";

const SocialButton = ({buttonTittle, btnTyp, color,backgroundColor, ...rest}) => {

    let bgColor = backgroundColor;
    return(
        <TouchableOpacity style = {[styles.buttonContainer, {backgroundColor:bgColor}]} 
        {...rest}>
            <View style = {styles.iconWrapper} >
                <FontAwesome name={btnTyp} style = {styles.icon} size={22} color={color} />
            </View>
            <View style = {styles.btnTxtWrapper} >
                <Text style = {styles.buttonText} >{buttonTittle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop:10,
        width:"100%",
        height:windowHeight/15,
        backgroundColor: '#2e64e5',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    iconWrapper:{
        width:30,
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        fontWeight:'bold',
    },
    btnTxtWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText : {
        fontSize:18,
        fontWeight: 'bold',
        color:'#ffffff',
        fontFamily:'Lato-Regular',
    },
});