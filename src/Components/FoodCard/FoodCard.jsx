
const FoodCard = ({item}) => {
    const {name,recipe,image,category, price} = item;
  return (
    
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Product" /></figure>
        <p className="text-orange-500 text-center">{price}$</p>
        <div className="card-body text-center">
            <h2 className="card-title justify-center">{name}!</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
                <button className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4">Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default FoodCard