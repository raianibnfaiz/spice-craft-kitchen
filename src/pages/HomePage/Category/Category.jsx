import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
export default class Category extends Component {
  render() {
    return (
        <section>
            <SectionHeader heading='Order Online' subHeading='From 11.00 am to 10.00pm'></SectionHeader>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1}></img>
            <h3 className='text-4xl text-center -mt-12 uppercase text-white'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide2}></img>
            <h3 className='text-4xl text-center -mt-12 uppercase text-white'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3}></img>
            <h3 className='text-4xl text-center -mt-12 uppercase text-white'>Soups</h3>    
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4}></img>
        <h3 className='text-4xl text-center -mt-12 uppercase text-white'>Deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5}></img>
        <h3 className='text-4xl text-center -mt-12 uppercase text-white'>Salads</h3>
        </SwiperSlide>
    
      </Swiper>
        </section>
    )
  }
}
