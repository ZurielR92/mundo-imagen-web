"use client";
import React from 'react';
import styles from './CustomersSection.module.scss';
import Image from 'next/image';

export interface CustomersSectionProps {
	// types...
}

const CustomersSection: React.FC<CustomersSectionProps>  = ({}) => {
	return (
		<section 
			className={styles.customerssection}
		>
			<div className={styles.logos}>
				
				<div className={styles.logosslide}>
					<Image src={'/customers/d1.jpg'} width={100} height={100} alt='Cliente tiendas D1'/>
					<Image src={'/customers/telemedellin.jpg'} width={157} height={100} alt='Cliente Telemedellín'/>
					<Image src={'/customers/teleantioquia.jpg'} width={200} height={56} alt='Cliente Teleantuiquia'/>
					<Image src={'/customers/alumina.jpg'} width={200} height={52} alt='Cliente Alumina'/>
					<Image src={'/customers/luminaire.jpg'} width={220} height={51} alt='Cliente Laminaire'/>
					<Image src={'/customers/municipio-sabaneta.jpg'} width={200} height={56 } alt='Cliente Municipio Sabaneta'/>
					<Image src={'/customers/municipio-caldas.jpg'} width={200} height={64} alt='Cliente Municipio Caldas'/>
					<Image src={'/customers/municipio-barbosa.jpg'} width={172} height={100} alt='Cliente Municipio Barbosa'/>
					<Image src={'/customers/municipio-girardota.jpg'} width={200} height={91} alt='Cliente Municipio Girardota'/>
					<Image src={'/customers/plaza-mayor.jpg'} width={178} height={100} alt='Cliente Municipio Girardota'/>
					<Image src={'/customers/gobernacion-antioquia.jpg'} width={210} height={60} alt='Cliente Municipio Girardota'/>
				</div>

				<div className={styles.logosslide}>
					<Image src={'/customers/d1.jpg'} width={100} height={100} alt='Cliente tiendas D1'/>
					<Image src={'/customers/telemedellin.jpg'} width={157} height={100} alt='Cliente Telemedellín'/>
					<Image src={'/customers/teleantioquia.jpg'} width={200} height={56} alt='Cliente Teleantuiquia'/>
					<Image src={'/customers/alumina.jpg'} width={200} height={52} alt='Cliente Alumina'/>
					<Image src={'/customers/luminaire.jpg'} width={220} height={51} alt='Cliente Laminaire'/>
					<Image src={'/customers/municipio-sabaneta.jpg'} width={200} height={56 } alt='Cliente Municipio Sabaneta'/>
					<Image src={'/customers/municipio-caldas.jpg'} width={200} height={64} alt='Cliente Municipio Caldas'/>
					<Image src={'/customers/municipio-barbosa.jpg'} width={172} height={100} alt='Cliente Municipio Barbosa'/>
					<Image src={'/customers/municipio-girardota.jpg'} width={200} height={91} alt='Cliente Municipio Girardota'/>
					<Image src={'/customers/plaza-mayor.jpg'} width={178} height={100} alt='Cliente Municipio Girardota'/>
					<Image src={'/customers/gobernacion-antioquia.jpg'} width={210} height={60} alt='Cliente Municipio Girardota'/>
				</div>


			</div>


 		</section>
	);
};

export default CustomersSection;
