import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const PAYPAL_CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID

function PaypalButton({ value, handleAction }) {
    console.log(value)
    return (
        <PayPalScriptProvider options={{ 'client-id': PAYPAL_CLIENT_ID }}>
            <PayPalButtons
                style={{ layout: 'horizontal' }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: value.toString(),
                                },
                            },
                        ],
                    })
                }}
                onApprove={async (data, actions) => {
                    const details = await actions.order.capture()
                    const name = details.payer.name.given_name
                    console.log(`El pago fue realizado por ${name}`)
                    await handleAction()
                }}
            />
        </PayPalScriptProvider>
    )
}

export default PaypalButton
