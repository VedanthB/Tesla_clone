import React from 'react'
import Button from './Button'
import './Item.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

function Item({
     title,
     desc,
     descLink,
     backgroundImg,
     leftBtnText,
     rightBtnText,
     leftBtnLink,
     rightBtnLink,
     twoButton,
     first
    })   {
    return (
        <div className='item' style={{
            // background goes here 
            backgroundImage: `url(${backgroundImg})`

        }} >
            <div className='item__container' >
                <div className='item__text'>
                    <p>{title}</p>
                    <div className='item__desc'>
                        <p>{desc}</p>
                    </div>
                </div>

                <div className='item__lowerThird'>
                    <div className='item__buttons'>
                        <Button imp='primary' text={leftBtnText} link={leftBtnLink} />

                        {twoButton && (
                            <Button imp='secondary' text={rightBtnText} link={rightBtnLink}/>
                        )}
                    </div>

                    <div className='item__expand' >
                        {first && (
                            <IconButton>
                                <ExpandMoreIcon />
                            </IconButton>                            
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Item
