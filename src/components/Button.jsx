import React from 'react'

const Button = ({buttonColor, buttonLay, children}) => {


    const btnColor = ['orange', 'outline']; 
    const btnLayout = ['relative', 'absolute', 'reduce_padding']


    const checkButtonColor = btnColor.includes(buttonColor) ? buttonColor : null

    const checkButtonLayout = btnLayout.includes(buttonLay) ? buttonLay : null

  return (
    <>

        <button className={
            `btn
            ${checkButtonColor}
            ${checkButtonLayout}` 
        }> 
            {children}
        </button>
    
    </>
  )
}

export default Button