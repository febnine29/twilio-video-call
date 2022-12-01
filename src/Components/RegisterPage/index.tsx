import {
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import {
    Button, 
    Box, 
    Stack, Text, Input, Checkbox,
    FormControl,
    Select,
    useToast } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { FC, useState } from 'react';
import RNPickerSelect from '@react-native-picker/picker'
import CSafeAreaView from '../CSafeAreaView';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '../../../typescript';
import type { registerData, errorMessage } from '../../../typescript';
import axios from 'axios'
import ApiClient from '../../api'
import styles from './styles';

const RegisterPage: FC = () => {
    const navigation = useNavigation<GenericNavigationProps>();
    const toast = useToast()
    const [showPass, setShowPass] = useState(false)
    const handleShowPass = () => setShowPass(!showPass);
    const [formData, setData] = React.useState<registerData>({
        fullName: {
            firstName: '',
            lastName: '',
        },
        phone: '',
        email: '',
        password: '',
        role: 'CUSTOMER'
    });
    const [confirmPass, setConfirmPass] = React.useState('')
    const [errors, setErrors] = React.useState<errorMessage>({
        title: '',
        password: '',
    });

    const validate = () => {
        if (formData.fullName.firstName.length <= 0 && 
            formData.fullName.lastName.length <= 0 && 
            formData.phone.length <= 0 && 
            formData.email.length <= 0 &&
            formData.password.length <= 0 &&
            confirmPass.length <= 0) {
            setErrors({ ...errors,
                title: 'Field is required'
            });
            return false;
        } else if (confirmPass !== formData.password){
            setErrors({ ...errors,
                password: 'Password does not match'
            });
        }
        return true;    
    };
    const sendResData = async () => {
        await ApiClient.post('http://10.0.2.2:3001/auth/register', formData)
        .then(async (res) => {
            console.log(res.data);
            await toast.show({
                placement: 'top',
                render: () => {
                    return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={1}>
                                <Text>Sign-Up Completed</Text>
                        </Box>;
                    }
                });
            navigation.navigate('Main', {screen: 'Login'})
        })
        .catch(err => {
            console.log(err)
            toast.show({
                placement: 'top',
                render: () => {
                    return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={1}>
                                <Text>Error</Text>
                        </Box>;
                    }
                });
        });
        console.log(formData);
        
    }
    const onSubmit = () => {
        validate() ? 
            sendResData()
            : 
            console.log('Validation Failed');
    };
    return (
        
            <View style={styles.container}>
                <View style={styles.TextCont}>
                    <Text fontSize='40' fontWeight='bold'>Register</Text>
                </View>
                <KeyboardAwareScrollView>
                    <Stack style={styles.StackForm}>
                        <FormControl isRequired>
                            <TextInput 
                                placeholder="First name*" 
                                onChangeText={value => setData({ ...formData,
                                    fullName: {firstName: value, lastName: ''}
                                })} 
                                style={styles.Input}
                            />
                                {errors.title ? errors.title : undefined }
                            <TextInput 
                                placeholder="Last name*" 
                                onChangeText={value => setData({ ...formData,
                                    fullName: {firstName: formData.fullName.firstName, lastName: value}
                                })} 
                                style={styles.Input}
                            />
                            <TextInput  
                                placeholder="Phone" 
                                onChangeText={value => setData({ ...formData,
                                    phone: value
                                })} 
                                style={styles.Input}
                            />
                                {errors.title ? errors.title : undefined }
                            <TextInput 
                                placeholder="Email" 
                                onChangeText={value => setData({ ...formData,
                                    email: value
                                })} 
                                style={styles.Input}
                            />
                                {errors.title ? errors.title : undefined }
                            <View style={styles.InputCont}>
                                <TextInput style={styles.InputPass} 
                                    placeholder='Password'
                                    secureTextEntry={showPass}
                                    onChangeText={value => setData({ ...formData,
                                        password: value
                                    })} 
                                /> 
                                <View style={styles.ShowIcon}>
                                    <TouchableOpacity
                                        onPress={() => setShowPass(!showPass)}
                                    >
                                    <Image 
                                        source={
                                            showPass ? require(`../../../images/show.png`)
                                                    :  require('../../../images/hidden.png')
                                        }
                                        style={{width: 20, height: 20}}
                                    />
                                    </TouchableOpacity>
                                </View>
                                
                                {errors.password ? errors.password  : undefined}
                            </View>
                            <View style={styles.InputCont}>
                                <TextInput style={styles.InputPass} 
                                    placeholder='Confirm Password'
                                    secureTextEntry={showPass}
                                    onChangeText={value => setData({ ...formData,
                                        password: value
                                    })} 
                                /> 
                                <View style={styles.ShowIcon}>
                                    <TouchableOpacity
                                        onPress={() => setShowPass(!showPass)}
                                    >
                                    <Image 
                                        source={
                                            showPass ? require(`../../../images/show.png`)
                                                    :  require('../../../images/hidden.png')
                                        }
                                        style={{width: 20, height: 20}}
                                    />
                                    </TouchableOpacity>
                                </View>
                                {errors.password ? errors.password  : undefined}
                            </View>
                            <Select selectedValue={formData.role} minWidth="200"  placeholder="Choose Service" _selectedItem={{
                                bg: "red.400",
                                fontSize: 18
                            }}
                                onValueChange={itemValue => setData({ ...formData,
                                    role: itemValue
                                })} 
                            >
                                <Select.Item label="Customer" value="CUSTOMER" />
                                <Select.Item label="Interpreter" value="INTERPRETER" />
                            </Select>  
                        </FormControl>
                        <TouchableOpacity
                            onPress={onSubmit}
                        >
                            <Text style={styles.CreateText}>Create Account</Text>
                        </TouchableOpacity>
                    </Stack>
                </KeyboardAwareScrollView>
                <View style={styles.Footer}>
                    <Text fontSize='16' style={{marginRight: 'auto', color: 'grey'}}>Already have an Account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginPage')}
                    >
                        <Text style={styles.ReturnSignIn}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
    )
} 
export default RegisterPage