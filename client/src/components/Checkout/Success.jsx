import { Button } from '@radix-ui/themes'
import { CheckCircle } from 'lucide-react'
import React from 'react'
import Invoice from '../Invoice/Invoice'

export default function Success() {
  return (
    <div>
      <Invoice/>
        <div>
            <CheckCircle />
        </div>
        <div>

            <h1>Your order has been placed succesfully.</h1>
            <Button variant='soft'>Download Invoice</Button>
        </div>
    </div>
  )
}
