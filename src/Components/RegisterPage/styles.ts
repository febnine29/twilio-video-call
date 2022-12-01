import { StyleSheet } from 'react-native';
// import { blob } from 'stream/consumers';

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    TextCont:{
        width: '100%',
        height: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    StackForm:{
        width: '100%',
        marginHorizontal: 'auto',
    },
    Input:{
        height: 50,
        marginBottom: 10,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'lightgray',
        paddingLeft: 15,
        fontSize: 15,
    },
    InputCont:{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginBottom: 10,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'lightgray',
        paddingLeft: 10,
    },
    InputPass:{
        width: '85%'
    },
    Touchable:{
        // width: 50,
        height: 60,
        position: 'absolute',
        right: 10,
        top: 0,
        backgroundColor: 'cyan',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CreateText:{
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        height: 60,
        backgroundColor: '#ff786e',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        borderRadius: 7,
        color: 'white',
        marginTop: 20,
    },
    Footer:{
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    ReturnSignIn:{
        width: 100,
        height: 50,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        backgroundColor: '#4e5aff',
        borderRadius: 7
    },
    ShowIcon:{
        width: '15%',
        height: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: 'lightgray',
        borderLeftWidth: 1,
    }
})
export default styles