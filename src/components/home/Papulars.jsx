import React from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import useData from '../../hooks/useData'
import Title from '../title/Title'
import Line from './Line'
import PopularItems from './PopularItems'

const Papulars = () => {
	const { data } = useData('post/lastones')
	return (
		<div className='container pb-[66px] mt-[60px] sm:mt-[70px] md:mt-[94px]'>
			<Title title={'Popular blogs'} />
			<Swiper
				breakpoints={{
					768: { slidesPerView: 3 },
				}}
				spaceBetween={30}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[FreeMode, Pagination, Autoplay]}
				className='mySwiper   screen_bnt:h-[700px] custom:h-[650px] flex  justify-between '
			>
				{data?.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<>
								<PopularItems key={index} {...item} />
							</>
						</SwiperSlide>
					)
				})}
			</Swiper>
			<Line />
		</div>
	)
}

export default Papulars
