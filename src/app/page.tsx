import { CategoriesSection } from '@/Components/HomePage/CategoriesSection';
import { ContactSection } from '@/Components/HomePage/ContactSection'
import { CustomersSection } from '@/Components/HomePage/CustomersSection';
import { SecondSection } from '@/Components/HomePage/SecondSection';
import { WelcomeHome } from '@/Components/HomePage/Welcome'
import { categoriesList } from '@/data/products';
import { ICategory } from '@/interfaces';


const getCategories = async () => {
  const listaCategorias: ICategory[] = [];
  const codigos: string[] = [ '0101','0205','0504','0605','0501','0102','0404', '0405', '0506' ];

  for (let p = 0; p < 9; p++) {
    categoriesList.find((obj, i) => {
      if (obj.code === codigos[p]) {
        listaCategorias.push(obj);
      }
    })
  }

  return listaCategorias
}

const HomePage = async () => {
  const categories = await getCategories();
  return (
    <main>

      <WelcomeHome/>
      <CategoriesSection categories={categories}/>
      <CustomersSection/>
    </main>
  )
}


export default HomePage