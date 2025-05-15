import { SafeAreaView, View } from "react-native"
import Header from "../../components/profile/header"
import React, { useContext, useState } from "react"
import { NavigationProp } from "@react-navigation/native"
import { MainComp } from "../../components/profile/main-comp"
import { AllUserDetails } from "../../contexts/myContext"


interface ProfileScreenProps{
    navigation: NavigationProp<any>
}
export const ProfileScreen:React.FC<ProfileScreenProps> =({navigation})=>{
    const allUserDetails= useContext(AllUserDetails)
    const [inputDisabled, setInputDisabled] = useState<boolean>(true)
    return (
        <SafeAreaView style={{flex:1}}>
            <Header navigation={navigation}/>
            <MainComp allUserDetails={allUserDetails} setInputDisabled={setInputDisabled} inputDisabled={inputDisabled} />
        </SafeAreaView>
    )
}