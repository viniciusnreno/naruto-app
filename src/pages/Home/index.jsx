import { Header } from '../../components/Header';
import { CardGroup } from '../../components/CardGroup';

export function Home(){
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <Header title="Naruto Characters"/>
      <CardGroup />
    </div>
  )
}
