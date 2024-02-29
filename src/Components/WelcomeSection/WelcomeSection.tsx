"use client";
import React, { ReactNode } from 'react';
import styles from './WelcomeSection.module.scss';
import CurveSVG from '../icons/CurveSVG';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export interface WelcomeSectionProps {
	title: ReactNode
	description: ReactNode
	urlImage: string
	altImage?: string
	urlAction?: string
	textAction?:string
}

const WelcomeSection: React.FC<WelcomeSectionProps>  = ({
	title,
	description,
	urlImage,
	altImage = 'Bienvenidos a Kubica Agencia',
	urlAction = '/contacto',
	textAction = '¡Quiero una Cotizacíón!'

}) => {
	return (
		<section className={styles.welcomesection}>
			<CurveSVG className={styles.svg}/>

			<div className={styles.container}>
				<motion.div 
					className={styles.info}
					initial={{
						opacity:0,
						translateX:'-100px'
					}}
					animate={{
						opacity:1,
						translateX:0
					}}
					viewport={{
						once:true
					}}
				>
					<h1>{title}</h1>
					<p>
						{description}
					</p>
					<Link href={urlAction}>
						<motion.button
							whileHover={{
								scale:1.1
							}}
						>
							{textAction}
						</motion.button>
					</Link>
				</motion.div>

				<motion.div 
					className={styles.image}
					initial={{
						opacity:0,
						translateX:'100px'
					}}
					whileInView={{
						opacity:1,
						translateX:0
					}}
					viewport={{
						once:true
					}}
					
					transition={{
						delay:.1
					}}
				>
					<Image priority src={urlImage} width={600} height={517} alt={altImage}/>
				</motion.div>
			</div>

 		</section>
	);
};

export default WelcomeSection;
