import { StyleSheet, View } from "react-native";
import Button from "../ui/Button";
import Input from "../ui/Input";

const AuthForm = ({isLogin}) => {
    return (
        <View style={styles.container}>
        {!isLogin && <Input label="Name:" placeholder="Enter your name"/>}
        <Input label="Email:" placeholder="Enter your email"/>
        <Input label="Password:" placeholder="Enter your password"/>
        <Button>
            {isLogin ? 'Login' : 'Signup'}
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32
    }
})

export default AuthForm