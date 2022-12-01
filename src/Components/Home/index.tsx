import { 
  Box,
  Button,
  Text 
} from "native-base"
import { useDispatch } from "react-redux"
import { storeToken } from "../../../reducer/ServerReducer"
import { GenericNavigationProps } from "../../../typescript"
import { useNavigation } from "@react-navigation/native"
const HomeView =() => {
  const dispatch = useDispatch()
  const navigation = useNavigation<GenericNavigationProps>();
  dispatch(storeToken('testtoken'))
  
  return (
    <Box>
      <Button
        onPress={() => navigation.navigate('Home')}
      >Call</Button>
    </Box>
  )
}
export default HomeView