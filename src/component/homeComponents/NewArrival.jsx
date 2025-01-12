import { Link, useParams } from "react-router-dom";
import NewArrivalCard from "./NewArrivalCard";

const NewArrival = ({data, text}) => {

    const newArrivalList = data.map((product, index) => {
        return (
            <Link key={product.id} to={`products/${product.id}`}>
                <NewArrivalCard product={product} />
            </Link>
        )
    })

    return (
        <section className='grid gap-6 px-6 max-w-[1280px] mt-[5rem] mb-[0] mx-auto'>
            <h2 className='text-3xl font-semibold'>{text ? text : 'New Arrivals'}</h2>
            <section className='grid grid-cols-4 justify-between gap-10 max-custom-md:grid-cols-3 max-custom-ssm:grid-cols-2 max-custom-sssm:grid-cols-1'>
                {newArrivalList}
            </section>
        </section>
  )
}

export default NewArrival