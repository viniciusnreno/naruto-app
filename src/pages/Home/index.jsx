import { Header } from '../../components/Header';
import { CardGroup } from '../../components/CardGroup';

export function Home(){
  return (
    <div className="container mx-auto text-center">
      <Header title="Naruto Characters"/>
      <CardGroup />
    </div>
  )
}
