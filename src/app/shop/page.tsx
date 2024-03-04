import { BentoGrid } from "@/components/ui/BentoGrid"
import Link from "next/link"
import { BentoGridSecondDemo } from "./grid"

const page = () => {
  return (
    <div className="flex">
        <Link href="/" className="text-4xl mt-2 p-2 relative md:left-[4rem]">Pluck</Link>
        <div className="mt-2">
        <Link href="/profile" className="bg-inherit rounded-lg p-2 relative border hover:bg-white duration-200 hover:text-gray-600 md:left-[146vh] md:top-4 top-[1rem] left-[25vh]">Profile</Link>
        </div>
        <div>
        <input type="text" placeholder="Search Products... " className="md:w-[30rem] rounded-full bg-inherit border relative md:left-[14rem] w-[10rem] p-2 mt-4 left-[-2rem] " />
        </div>
        <div className="relative md:top-[8rem] md:right-[100vh]">
            <h1 className="md:text-2xl text-sm font-extralight ">Showing Results For Foods</h1>

            <div className="grid grid-cols-3 gap-x-[26rem] gap-y-[4rem] mt-4">
                <div className="border rounded-lg w-[20rem] h-[28rem] mt-4 hover:scale-75 duration-300">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faniasvibrantkitchen.com%2Fwp-content%2Fuploads%2F2022%2F06%2FIs-butter-chicken-sweet-or-spicy-e1656585726760.jpg&f=1&nofb=1&ipt=212423f3c4ceb39a37d604adb190ccfa7effd0e0a9f5bd75e844946669730e70&ipo=images" alt="food1" className="w-full h-[16rem] object-cover"/>
                    <h1 className="text-2xl border p-2">Butter Chicken</h1>
                    <p className="text-lg p-2 border">Price: ₹220</p>
                    <p className="text-lg p-2 ">Seller: Aangan Dhaba</p>
                    <Link href="/cart" className="bg-inherit p-2 rounded-lg border mt-2 relative top-4 left-20 hover:bg-white duration-200 hover:text-gray-600">Add to Cart</Link>
                </div>
                <div className="border rounded-lg w-[20rem] h-[28rem] mt-4 hover:scale-75 duration-300">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tDh7orO3Nom9S0MegK6xpAHaJk%26pid%3DApi&f=1&ipt=c7b9bf405f6559ef883e0e6102f024430b73c8563476aeb268782e3e8db5333b&ipo=images" alt="food1" className="w-full h-[16rem] object-cover"/>
                    <h1 className="text-2xl border p-2">Kadhai Paneer</h1>
                    <p className="text-lg p-2 border">Price: ₹120</p>
                    <p className="text-lg p-2 ">Seller: Aangan Dhaba</p>
                    <Link href="/cart" className="bg-inherit p-2 rounded-lg border mt-2 relative top-4 left-20 hover:bg-white duration-200 hover:text-gray-600">Add to Cart</Link>
                </div>
                <div className="border rounded-lg w-[20rem] h-[28rem] mt-4 hover:scale-75 duration-300">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nUguj3WG4rGcSPu3rqMUGgHaE8%26pid%3DApi&f=1&ipt=7f0ab72127401d6b6135addc6197b708cc1dc2782110eb898dd0b23d03917dae&ipo=images" alt="food1" className="w-full h-[16rem] object-cover"/>
                    <h1 className="text-2xl border p-2">Omelette</h1>
                    <p className="text-lg p-2 border">Price: ₹20</p>
                    <p className="text-lg p-2 ">Seller: Bhabhi Shop</p>
                    <Link href="/cart" className="bg-inherit p-2 rounded-lg border mt-2 relative top-4 left-20 hover:bg-white duration-200 hover:text-gray-600">Add to Cart</Link>
                </div>
                <div className="border rounded-lg w-[20rem] h-[28rem] mt-4 hover:scale-75 duration-300">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SoB8jyncUVUlWIEls-1-CQHaEK%26pid%3DApi&f=1&ipt=095d6e2161feb4210dd1a75a01e926f60e329ae155082dc3766e46185f223db2&ipo=images" alt="food1" className="w-full h-[16rem] object-cover"/>
                    <h1 className="text-2xl border p-2">Veg Momos</h1>
                    <p className="text-lg p-2 border">Price: ₹20</p>
                    <p className="text-lg p-2 ">Seller: Bhabi Shop</p>
                    <Link href="/cart" className="bg-inherit p-2 rounded-lg border mt-2 relative top-4 left-20 hover:bg-white duration-200 hover:text-gray-600">Add to Cart</Link>
                </div>
                <div className="border rounded-lg w-[20rem] h-[28rem] mt-4 hover:scale-75 duration-300">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FtYwylarEQoWAmyB7D_61gHaE8%26pid%3DApi&f=1&ipt=2e70cd3c0ab8c4252b225024dc7c1c760e13a503b15a9577116a4bed0aee9d6e&ipo=images" alt="food1" className="w-full h-[16rem] object-cover"/>
                    <h1 className="text-2xl border p-2">Chai</h1>
                    <p className="text-lg p-2 border">Price: ₹5</p>
                    <p className="text-lg p-2 ">Seller: Tapri</p>
                    <Link href="/cart" className="bg-inherit p-2 rounded-lg border mt-2 relative top-4 left-20 hover:bg-white duration-200 hover:text-gray-600">Add to Cart</Link>
                </div>
                <div className="border rounded-lg w-[20rem] h-[28rem] mt-4 hover:scale-75 duration-300">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.azuBrOetveLrz-aINEx3JAHaHa%26pid%3DApi&f=1&ipt=4deb491abd88ac1477a23dda04a303530241c891b1cf1485626c209fc630da68&ipo=images" alt="food1" className="w-full h-[16rem] object-cover"/>
                    <h1 className="text-2xl border p-2">Paneer Parantha</h1>
                    <p className="text-lg p-2 border">Price: ₹40</p>
                    <p className="text-lg p-2 ">Seller: Bhabhi Shop</p>
                    <Link href="/cart" className="bg-inherit p-2 rounded-lg border mt-2 relative top-4 left-20 hover:bg-white duration-200 hover:text-gray-600">Add to Cart</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
