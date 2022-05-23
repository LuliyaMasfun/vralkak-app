import React from 'react';
import companyLogoInfo from '../../public/assets/logo.png';
import Image from 'next/image';

export default function InfoCard(){
    return(
        <div className='infoCard'>

       
        <div style={{
                
        }}>
        Vrålkäk
        </div>

        <div className='infoLogo'>
            <Image src={companyLogoInfo} alt="company logo" style={{
              
            }}>

            </Image>
          
            </div>

        </div>
    )
}








