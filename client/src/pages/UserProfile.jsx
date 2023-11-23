import { Avatar, Button, Separator, Text, TextArea } from '@radix-ui/themes'
import React from 'react'
import InputFields from '../components/UserProfile/InputFields'
import { LockIcon, Phone, User2 } from 'lucide-react'

export default function UserProfile() {
  return (
    <>
        <div className='flex flex-col items-center justify-start w-full h-screen p-1'>
            <div className='mt-4 heading'>
                <h1 className='text-4xl font-semibold'>Profile Settings</h1>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 mt-10'>
                <Avatar src='https://i.pravatar.cc/150?img=7' size="5" />
                    <p className='text-xl font-semibold'>Yash Gaurav</p>
            </div>
            <div className='flex flex-col items-center justify-center w-2/4 px-4 mt-4 max-md:w-full max-md:mt-8'>
                <h2 className='text-2xl font-normal'>User Details</h2>
                <Separator size="4" my="4"/>
                <div className='flex items-center justify-between w-4/5 my-2 max-md:w-full'>
                    <Text className='font-bold'>Full Name</Text>
                    <InputFields placeholder={"Enter new  name"} defaultValue={"Yash Gaurav"} userIcon={<User2 height={16} width={16}/>}/>
                </div>
                <div className='flex items-center justify-between w-4/5 my-2 max-md:w-full'>
                    <Text className='font-bold'>Password</Text>
                    <InputFields placeholder={"Enter new Password"} defaultValue={"password123"} userIcon={<LockIcon height={16} width={16}/> }type={"password"}/>
                </div>
                <div className='flex items-center justify-between w-4/5 my-2 max-md:w-full'>
                    <Text className='font-bold'>Phone Number</Text>
                    <InputFields placeholder={"Enter your phone number"} defaultValue={"+91 99693512590"} userIcon={<Phone height={16} width={16}/>}/>
                </div>
                <div className='flex items-start justify-between w-4/5 my-2 max-md:w-full'>
                    <Text className='font-bold max-md:pr-1'>Delivery Address</Text>
                    <TextArea variant='soft' size="2" className='w-80 max-md:w-60' placeholder='Enter your delivery address' rows={4} />
                </div>
            </div>
            <div className='flex items-center gap-4 my-4'>
                <Button size="3" variant='ghost'>Cancel</Button>
                <Button size="3">Save</Button>
            </div>
        </div>
    </>
  )
}
