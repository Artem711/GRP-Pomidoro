// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ProductBasketItem from "./ProductBasketItem/ProductBasketItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  Products: Array<any>

  addItemToOrderActionCreator: (
    title: string,
    price: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => void
}

const ProductsBasketList: React.FC<PropsType> = (props) => {
  return (
    <View>
      {props.Products.map((product: any) => {
        return (
          <ProductBasketItem
            product={product}
            allowEdit={true}
            addItemToOrderActionCreator={props.addItemToOrderActionCreator}
          />
        )
      })}
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {},
})

export default ProductsBasketList
