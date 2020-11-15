// PLUGINS IMPORTS //
import React from "react"
import ReactNative from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  size?: number | undefined
  weight?: string | undefined
  color?: string | undefined
  style?: any | undefined
}

const Text: React.FC<PropsType> = (props: any) => {
  const getProps = () => {
    const { size, weight, color } = props

    return {
      fontSize: size,
      fontFamily: weight,
      color: color,
    }
  }

  return (
    <ReactNative.Text style={{ ...getProps(), ...props.style }}>
      {props.children}
    </ReactNative.Text>
  )
}

Text.defaultProps = {
  size: 14,
  color: "#1A1824",
  weight: "regular",
}

export default Text
