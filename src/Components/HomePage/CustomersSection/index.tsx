import { TitleSection } from "@/Components";
import { Section } from "@/Components/Section";
import { FC } from "react";




export const CustomersSection:FC = () => {
    return (
        <Section style={{padding:'50px 0'}} colorClipTop={'resalt'} colorClipBottom='dark'>
            <TitleSection title="Nuestros clientes satisfechos" subtitle="Colaboraciones exitosas que hablan por si mismas"/>
        </Section>
    )
}