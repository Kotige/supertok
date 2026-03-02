export default function Carousel({products}) {
    return (
        <div className="
            flex gap-4
            overflow-x-auto
            pb-4
            snap-x snap-mandatory
            mx-4 mt-16
        ">
            {products.map((product) => (
                <div key={product.id}
                    className="min-w-[180px] max-w-[180px] min-h-[280px] flex-shrink-0 border border-off p-4 snap-start"
                    style={{background: `radial-gradient(circle at center, ${product.gradientInit} 10%, ${product.gradientEnd} 70%)`}}
                >
                    <div className="-mt-10 flex items-center justify-center mb-4">
                        <img 
                            src={product.image} 
                            alt={product.title}
                        />
                    </div>
                    <h3 className="text-sm text-off font-semibold mb-2 text-center">
                        {product.title}
                    </h3>
                    <p className="text-xs text-off text-center">
                        {product.description}
                    </p>
                </div>
            ))}
        </div>
    )
}