import React, { useState } from 'react';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import TabOptions from '../../components/common/tabOptions';
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningout';
import NightLife from '../../components/nightlife';
const HomePage = ()=>{
    const [ActiveTab,setActiveTab] = useState("Delivery");
    const getCorrectScreen = (tab) =>{
        switch(tab){
            case "Delivery":
                return <Delivery/>
            case "Dining Out":
                return <DiningOut/>
            case "Nightlife":
                return <NightLife/>
            default:
                return <Delivery/>
        }

    }
    return (
        <>
            <Header/>
            <TabOptions ActiveTab = {ActiveTab} setActiveTab={setActiveTab}/>
            {getCorrectScreen(ActiveTab)}
            <Footer/>
        </>
    )

}






export default HomePage;