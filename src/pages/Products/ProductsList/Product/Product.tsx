import { ProductsDataInterface } from "../../../../storage/slices/productsSlice"
import { IdWrapper, InfoWrapper, ProductCategory, ProductDescription, ProductId, ProductImage, ProductName, ProductPrice, ProductWrapper, Separator } from "./Product.style"


const Product = ({ data }: { data: ProductsDataInterface }) => {
  const { id, name, category, description, price } = data
  return (
    <ProductWrapper>
      <ProductImage src={`https://picsum.photos/400?random=${id}`} alt={name} />
      <InfoWrapper>
        <ProductName>{name}</ProductName>
        <ProductCategory>Category: {category}</ProductCategory>
        <Separator />
        <ProductDescription>{description}</ProductDescription>
        <Separator />
        <IdWrapper>
          <ProductPrice>Price: {price} UAH</ProductPrice>
          <ProductId>ID {id}</ProductId>
        </IdWrapper>
      </InfoWrapper>
    </ProductWrapper>
  )
}

export default Product