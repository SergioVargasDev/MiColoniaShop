import {AiOutlinePercentage} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export function Sidebar () {
    return (
        <section className="w-80 min-h-screen flex flex-col border-r-2 border-black absolute">
            <img src="https://images.prismic.io/simpliroute/85eca361-d606-4cb9-9bb3-0bc359e09961_planograma+de+abarrotes.jpg?auto=compress,format" alt="abarrotes" className="p-2 rounded-2xl " />
            <h1 className="text-center text-xl font-semibold">Abarrotes Lupe</h1>
            <h2 className="bg-slate-200 p-1">Tiempo de espera: 30 min</h2>
            <h2 className="bg-slate-200 p-1 mt-2">Horario: 9am - 9pm</h2>
            <div className='flex flex-row justify-center mt-4'>
                <AiOutlinePercentage className="h-10 w-10"/>
                <h2 className="self-center text-xl">Promociones</h2>
            </div>
            <h2 className="bg-slate-200 p-1 mt-4">Carrito:</h2>
            <div className='flex flex-row justify-center mt-4'>
                <AiOutlineShoppingCart className="h-10 w-10"/>
            </div>
            <h2 className="bg-slate-200 p-1 mt-4">Estadisticas:</h2>
        </section>
    )
}