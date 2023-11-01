import dynamic from "next/dynamic"
import HeaderFallback from "../HeaderFallback/HeaderFallback"



const HeaderDynamic = () => {
    const Header = dynamic(()=> import ('../Header/index'),{
        loading:()=> <HeaderFallback/>
    })
    return <Header/>
}

export default HeaderDynamic