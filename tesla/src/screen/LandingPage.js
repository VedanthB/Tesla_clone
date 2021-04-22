import React from 'react'
import './LandingPage.css'
import Item from '../components/Item'
import Accessories from '../assets/Desktop-Accessories.jpg';
import ModelS from '../assets/Desktop-ModelS.jpeg'
import Model3 from '../assets/Desktop-Model3.jpeg'
import ModelX from '../assets/Desktop-ModelX.jpeg'
import ModelY from '../assets/Desktop-ModelY.jpeg'
import SolarPanels from '../assets/Desktop-SolarPanels.jpeg'
import SolarRoof from '../assets/Desktop-SolarRoof.jpeg'

function LandingPage() {
    return (
    <div >
     <div className="app__itemsContainer" >
       <Item 
         title="Model S"
         desc='$69,420'
         descLink=''
         backgroundImg={ModelS}
         leftBtnText='CUSTOM ORDER'
         leftBtnLink=''
         rightBtnText='LEARN MORE'
         rightBtnLink=''
         twoButton='true'
         first
        />

          <Item 
         title="Model 3"
         desc='Money-back guarantee'
         descLink=''
         backgroundImg={Model3}
         leftBtnText='CUSTOM ORDER'
         leftBtnLink=''
         rightBtnText='LEARN MORE'
         rightBtnLink=''
         twoButton='true'
        />

          <Item 
         title="Model X"
         desc='Money-back guarantee'
         descLink=''
         backgroundImg={ModelX}
         leftBtnText='CUSTOM ORDER'
         leftBtnLink=''
         rightBtnText='LEARN MORE'
         rightBtnLink=''
         twoButton='true'
        />

           <Item 
         title="Model Y"
         desc='Money-back guarantee'
         descLink=''
         backgroundImg={ModelY}
         leftBtnText='CUSTOM ORDER'
         leftBtnLink=''
         rightBtnText='LEARN MORE'
         rightBtnLink=''
         twoButton='true'
        />

            <Item 
               title="Solar for New Roofs"
               desc='Money-back guarantee'
               descLink=''
               backgroundImg={SolarRoof}
               leftBtnText='CUSTOM ORDER'
               leftBtnLink=''
               rightBtnText='LEARN MORE'
               rightBtnLink=''
               twoButton='true'
            />

            <Item 
                title="Lowest Cost Solar Panels in America"
               desc='Money-back guarantee'
               descLink=''
               backgroundImg={SolarPanels}
               leftBtnText='ORDER NOW'
               leftBtnLink=''
               rightBtnText='LEARN MORE'
               rightBtnLink=''
                twoButton='true'
             />
   
          <Item 
            title="Accessories"
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={Accessories}
            leftBtnText='SHOP NOW'
            leftBtnLink=''
            rightBtnText='LEARN MORE'
            rightBtnLink=''
         
           />



     </div>
        
 </div>
    )
}

export default LandingPage
