import {MdLocalDrink} from 'react-icons/md'
import {GiMilkCarton} from 'react-icons/gi'
import {GiFruitBowl} from 'react-icons/gi'
import {FaBreadSlice} from 'react-icons/fa'
import {FaSeedling} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import { Card } from '@/components/card'
import { createClient } from '@/utils/supabase/server'

export async function Main () {
    const supabase = createClient()
    const { data: products, error } = await supabase.from('productos').select('*')
    return (
        <main className="ml-80 flex min-h-screen flex-col items-center mt-10 ">
            <ul className='flex flex-row gap-10'>
                <button className='flex flex-col items-center'>
                    <GiFruitBowl className="h-10 w-10"/>
                    <h3>Frutas y verduras</h3>
                    <div className='w-full h-1 bg-black'></div>
                </button>
                <button className='flex flex-col items-center'>
                    <FaBreadSlice className="h-10 w-10"/>
                    <h3>Panaderia y tortilleria</h3>
                </button>
                <button className='flex flex-col items-center'>
                    <FaSeedling className="h-10 w-10"/>
                    <h3>Despensa y productos secos</h3>
                </button>
                <button className='flex flex-col items-center'>
                    <GiMilkCarton className="h-10 w-10"/>
                    <h3>Lacteos y huevos</h3>
                </button>
                <button className='flex flex-col items-center'>
                    <MdLocalDrink className="h-10 w-10"/>
                    <h3>Bebidas</h3>
                </button>
            </ul>
            <div className='flex flex-row border-2 border-black p-2 rounded-2xl mt-5'>
                <input type="text" placeholder='Buscar' className='focus:outline-none w-80'/>
                <AiOutlineSearch className='self-center h-6 w-6'/>
            </div>
            <div className='grid gap-32 sm:grid-cols-2 lg:grid-cols-5 mt-10'>
                {products?.map((product: any) => (
                    <Card key={product.id} name={product.name} price={product.precio} image={product.img}/>
                ))}
            </div>
        </main>
    )
}