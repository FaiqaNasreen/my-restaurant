import React from 'react';
import "./gallery.css";
import imageItem1 from '../../../assets/burger.jpg';
import imageItem2 from '../../../assets/cake.jpg';
import imageItem3 from '../../../assets/cheese.jpeg';
import imageItem4 from '../../../assets/cheese2.jpg';
import imageItem5 from '../../../assets/coffee.jpeg';
import imageItem6 from '../../../assets/pasta.jpeg';
import imageItem7 from '../../../assets/pizza.jpeg';
import imageItem8 from '../../../assets/wine.jpeg';
import imageItem9 from '../../../assets/pasta.jpg';
import imageItem11 from '../../../assets/cheese.jpg';
import imageItem12 from '../../../assets/img1.jpg';
import imageItem13 from '../../../assets/kitchen_chef_edit.jpeg';
import imageItem14 from '../../../assets/pasta.jpeg';
import imageItem15 from '../../../assets/coffee-items.jpg';
import imageItem16 from '../../../assets/coffee.jpg';





 
const OurGallery = () => {
  return (
    <div className='gallery'>
       <figure className='gallery_item gallery_item-1'>
        <img src={imageItem1} alt='Gallery image 2' className='gallery__img' />
        </figure>
        <figure className='gallery_item gallery_item-2'>
        <img src={imageItem2} alt='Gallery image 2' className='gallery__img' />
        </figure>
        <figure className='gallery_item gallery_item-3'>
        <img src={imageItem3} alt='Gallery image 3' className='gallery__img' />
        </figure>
        <figure className='gallery_item gallery_item-4'>
        <img src={imageItem4} alt='Gallery image 4' className='gallery__img' />
        </figure>
        <figure className='gallery_item gallery_item-5'>
        <img src={imageItem5} alt='Gallery image 5' className='gallery__img' />
        </figure>
        <figure className='gallery_item gallery_item-6'>
        <img src={imageItem6} alt='Gallery image 6' className='gallery__img' />
        </figure>
        <figure className='gallery_item gallery_item-7'>
        <img src={imageItem7} alt='Gallery image 7' className='gallery__img' />
        </figure>
        <figure className='gallery_item gallery_item-8'>
        <img src={imageItem8} alt='Gallery image 8' className='gallery__img' />
        </figure>
        <figure className='gallery_item gallery_item-9'>
        <img src={imageItem9} alt='Gallery image 9' className='gallery__img' />
        </figure>
         <figure className='gallery_item gallery_item-1'>
        <img src={imageItem11} alt='Gallery image 2' className='gallery__img' />
        </figure>
      
        <figure className='gallery_item gallery_item-3'>
        <img src={imageItem12} alt='Gallery image 3' className='gallery__img' />
        </figure>
        <figure className='gallery_item gallery_item-4'>
        <img src={imageItem13} alt='Gallery image 4' className='gallery__img' />
        </figure>
        <figure className='gallery_item gallery_item-5'>
        <img src={imageItem14} alt='Gallery image 5' className='gallery__img' />
        </figure>
        <figure className='gallery_item gallery_item-6'>
        <img src={imageItem15} alt='Gallery image 6' className='gallery__img' />
        </figure>
        <figure className='gallery_item gallery_item-2'>
        <img src={imageItem16} alt='Gallery image 2' className='gallery__img' />
        </figure>
        
    </div>
  )
}

export default OurGallery