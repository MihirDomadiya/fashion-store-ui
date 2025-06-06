import { ChevronLeft, ChevronRight, Minus, MoveRight, Search } from 'lucide-react'
import React from 'react'

export default function Home() {
    return (
        <div className='container-cust'>
            <div className="">
                <h2 className='fashion-type'>Men</h2>
                <h2 className='fashion-type'>WOMEN</h2>
                <h2 className='fashion-type'>KIDS</h2>
            </div>

            <div className="position-relative">
                <Search className='search-icon' />
                <input type="text" placeholder='Search' className='search-bar col-12 col-xl-4 col-lg-6 col-md-8 text-right' />
            </div>
            <div className="flex justify-content-between mb-[42px]">
                <div className="fashion-container flex flex-col w-[40%] justify-content-between h-[452px]">
                    <div>
                        <h1 className='fashion-title mb-0'>NEW  <br />COLLECTION</h1>
                        <h1 className='fashion-sub-title mb-0'>Summer <br /> 2025</h1>
                    </div>

                    <div className="d-flex">
                        <button className='w-50 shop-btn d-flex align-items-center justify-between col-12 col-xl-3 col-lg-5 col-md-7'>Go To Shop <img src="/assets/images/right-arrow.png" alt="" /></button>
                        <button className='home-arrow-lft'><ChevronLeft /></button>
                        <button className='home-arrow-rt'><ChevronRight /></button>
                    </div>
                </div>

                <div className="flex w-[60%]">
                    <img src="/assets/images/Rectangle 12.png" alt="" className='cloth-img' />
                    <img src="/assets/images/Rectangle 13.png" alt="" className='' />
                </div>
            </div>
        </div>
    )
}


