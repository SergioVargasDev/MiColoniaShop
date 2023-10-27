import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';

export function Topbar () {
    return (
        <header className="flex flex-row justify-between border-b-2 border-black p-2">
            <div className='flex flex-row text-center ml-10'>
                <h1 className='text-xl font-bold'>MiColoniaShop</h1>
                <ul className='flex flex-row gap-5 self-center ml-10'>
                    <a className='cursor-pointer'>Home</a>
                    <a className='cursor-pointer'>Menu</a>
                    <a className='cursor-pointer'>Shop</a>
                    <a className='cursor-pointer'>Community</a>
                </ul>
            </div>
            <div className='flex flex-row self-center gap-5'>
                <AiOutlineShoppingCart className='self-center h-6 w-6'/>
                <AiOutlineSearch className='self-center h-6 w-6'/>
                <button className='border-black border-2 px-5 py-1 rounded-2xl '>Login</button>
            </div>                
        </header>
    )
}