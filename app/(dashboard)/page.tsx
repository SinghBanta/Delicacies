import { CategoryItems, PopularProductItems } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="sm:ml-64 w-full">
      <div className="p-4 border-gray-200 rounded-lg  mt-14">

        <Image src="/assets/Grocery.png" alt="Delicacies" width={1000} height={1000} className="w-full  rounded-2xl object-contain" />

        <h2 className="mt-10 mb-5 text-xl font-bold tracking-wide text-primary">Shop By Category</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2">
          {CategoryItems.map((item, index) => (
            <CategoryCard key={index} item={item} />
          ))}
        </div>

        <h2 className="mt-10 mb-5 text-xl font-bold tracking-wide text-primary">Our Popular Products</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
          {PopularProductItems.map((item, index) => (
            <ProductCard key={index} item={item}/>
          ))}
        </div>

        <Image src="/assets/asset 18.png" alt="Delicacies" width={1000} height={1000} className="w-full mt-10" />
      </div>
    </div>
  )
}


function CategoryCard({ item }: Readonly<{ item: { image: string, title: string } }>) {
  return (
    <div className="flex flex-col  items-center  bg-green-300  gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-600  " >

      <Image alt="icon" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" className="group-hover:scale-125 transition-all ease-in-out" src={item.image} />

      <h2 className="text-green-800 group-hover:text-white">{item.title}</h2>

    </div>
  )
}

function ProductCard({ item }: Readonly<{ item: { image: string, title: string, price: number, discountPrice?: number } }>) {
  return (
    <div className="p-2 md:p-6 flex flex-col items-center  justify-center gap-3 bg-amber-100 dark:bg-zinc-900 border rounded-lg hover:scale-105 hover:shadow-lg transition-all ease-in-out cursor-pointer ">
      <Image alt="popular product" loading="lazy" width="500" height="200" decoding="async" data-nimg="1" className="h-[200px] object-contain" src={item.image}/>
      
      <h2 className="font-bold text-lg">{item.title}</h2>
      <div className="flex gap-3">
        <h2 className="font-bold text-lg">${item.price}</h2>
        <h2 className="font-bold text-lg line-through text-gray-500">{item.discountPrice && `$${item.discountPrice}`}</h2>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-10 px-4 py-2 text-primary hover:text-white hover:bg-primary" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R86eula:" data-state="closed">Add to cart</button>
        </div>

  )
}