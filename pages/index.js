import InvestOppor from "./invest_oppor"
import PromisingSectors from "./Promising _sectors"
import Governorates from "./governorates"
import Partners from "./partners"
import HeaderSwiper from "./headerSwiper"
import Header from "@/components/header"
import PromisingCard from "./promising_sectors_card"
export default function Home() {
  return (
    <>
    <Header/>
    <HeaderSwiper/>
    <InvestOppor/>
    <PromisingSectors/>
    <PromisingCard/> 
    <Governorates/>
    <Partners/>
    </>
  )
}
