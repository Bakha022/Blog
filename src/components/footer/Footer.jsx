import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
	return (
		<div className='py-12 bg-[#232536] mt-[100px]'>
			<div className='container'>
				<div className='flex flex-col items-center md:flex-row md:justify-between'>
					<div className='text-center md:text-start'>
						<p className='text-inter font-normal leading-7 text-base text-white'>
							Finstreet 118 2561 Fintown
						</p>
						<p className='text-inter font-normal leading-7 text-base text-white'>
							Hello@finsweet.com 020 7993 2905
						</p>
					</div>
					<div className='mt-5 flex  gap-6 md:mt-0'>
						<FaFacebook color='#6D6E76' size={24} />
						<FaTwitter color='#6D6E76' size={24} />
						<FaInstagram color='#6D6E76' size={24} />
						<FaLinkedin color='#6D6E76' size={24} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
