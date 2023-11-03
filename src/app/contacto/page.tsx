import { ContactSection } from '../../Components/HomePage/ContactSection'
import { Map } from '../../Components/Map'
import { Section } from '../../Components/Section'
import { TitlePage } from '../../Components/TitlePage'

const ContactoPage = () => {
  return (
        <>
        <TitlePage title='Contacto'>
            
            </TitlePage>
            
            <Section colorClipTop={ 'light' } colorClipBottom='resalt'>
                <Map/>
            </Section>

        <ContactSection/>
        </>
  )
}

export default ContactoPage