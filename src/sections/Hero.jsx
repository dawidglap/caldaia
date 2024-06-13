import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const Hero = () => {
    return (
        <section
            id='home'
            className='w-full flex xl:flex-row flex-col  min-h-screen gap-10 max-container justify-center'
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
                <p>Lorem, ipsum dolor.</p>
                <h1>
                    <span>
                        your super mega
                    </span>
                    <br />
                    <span>
                        fantastic
                    </span>
                    title
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, deserunt!</p>
                <Button
                    label="Show now"
                    iconURL={arrowRight}
                />
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">

                </div>


            </div>
        </section >
    )
}

export default Hero