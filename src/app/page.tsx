import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity';
import ProductCart from './ProductCart';



 export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"] {
    price,
      _id,
      title,
      image,
      category -> {
        name
      }   
  }`);
  return res;
}

export interface IProduct {
  title: string,
  _id: string,
  description: string,
  image: IImage //IImage stands for interface image,
  price:number,
  category: {
    name: string
  } 
}
 
export default async function Home() {
  const data: IProduct[] = await getProductData()

  return (
    <div className='grid grid-cols-[repeat(3,auto)]  justify-center gap-x-10'>
      {data.map((item) => (
        <div key={item._id}>
        <ProductCart item={item}/>
        </div>
      ))}
    </div>
  )
}
