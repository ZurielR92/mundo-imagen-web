import { TitleSection } from "@/Components";
import { Section } from "@/Components/Section";
import { FC } from "react";
import styles from './CustomersSection.module.scss';
import Image from "next/image";




export const CustomersSection:FC = () => {
    return (
        <Section invert style={{padding:'150px 0'}} colorClipTop={'primary'} colorClipBottom='dark'>
            <TitleSection title={<>Nuestros <strong>clientes</strong> satisfechos</>} subtitle="Colaboraciones exitosas que hablan por si mismas"/>
            <div className={styles.grid}>
                <Image src={'/img/customers/cliente-aceros-turia.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-area-metropolitana.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-doricolor.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-sarku.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-fenalco.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-d1.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-gana.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-argos.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-postobon.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-alcaldia-medellin.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-sura.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-metro.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-premiun-plaza.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-eafit.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-nutresa.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-camara-comercio-medellin.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-gases-de-antioquia.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-universidad-pontificia-bolivariana.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-cueros-velez.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-alcaldia-envigado.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-frisby.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-epm.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-sealco.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
                <Image src={'/img/customers/cliente-grupo-afin.png'} width={100} height={100} alt="Logo cliente aceros turia"/>
            </div>
        </Section>
    )
}