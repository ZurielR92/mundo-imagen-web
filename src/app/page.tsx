import { CategoriesSection } from '@/Components/HomePage/CategoriesSection';
import { CustomersSection } from '@/Components/HomePage/CustomersSection';
import { WelcomeHome } from '@/Components/HomePage/Welcome'
import { categoriesList } from '@/data/products';
import { ICategory } from '@/interfaces';
import { WhyUs } from './components/WhyUs';


const getCategories = async () => {
  const listaCategorias: ICategory[] = [];
  const codigos: string[] = [ '0701','0205','0108','0705','0203', '0105', '0501','0404', '0405', '0506', '0505', '0601',  ];

  for (let p = 0; p < 12; p++) {
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
      <WhyUs/>
      <CategoriesSection categories={categories}/>
      <CustomersSection/>
    </main>
  )
}


export default HomePage