import ContractDetails from '@/components/Deploy/ContractDetails'
import Introduction from '@/components/Deploy/Introduction'
import SelectChain from '@/components/Deploy/SelectChain'
import React from 'react'

const index = () => {
  return (
    <div className='bg-[#171717] h-screen flex items-center justify-center'>
        {/* <Introduction/> */}
        {/* <ContractDetails/> */}
        <SelectChain/>
    </div>
  )
}

export default index