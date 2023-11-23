import { TextField } from '@radix-ui/themes'
import { User2 } from 'lucide-react'
import React from 'react'

export default function InputFields({placeholder, defaultValue, userIcon, type}) {
  return (
    <>
    <TextField.Root variant="soft" className="w-80 max-md:w-60">
      <TextField.Input placeholder={placeholder} defaultValue={defaultValue} type={type}/>
      <TextField.Slot>
        {userIcon}  
      </TextField.Slot>
    </TextField.Root>
    </>
  )
}
