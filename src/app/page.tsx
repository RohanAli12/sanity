import { client } from '@/lib/sanityClient'
import Image from 'next/image';
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../sanity/lib/image';


export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"] {
    price,
      _id,
      title,
      image,
      category -> {
        name,
        _id      
      } 
  } 
  `);
  return res;
}

interface IProduct {
  title: string,
  _id: string,
  description: string,
  image: IImage //IImage stands for interface image,
  category: {
    name: string
  },
  price:number
}

export default async function Home() {
  const data: IProduct[] = await getProductData()

  return (
    <div className='grid grid-cols-[repeat(3,auto)]  justify-center gap-x-10'>
      {data.map((item) => (
        <div key={item._id}>
          <Image
            src={urlForImage(item.image).url()}
            width={200}
            height={200}
            className='max-h-[100px] object-cover object-center'
            alt='product' />
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
            <button className='border py-2 px-6 rounded bg-blue-600 text-white'>Add To Cart</button>
        </div>
      ))}
    </div>
  )
}
