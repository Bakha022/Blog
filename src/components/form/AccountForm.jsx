import React from 'react'
import { FiUpload } from 'react-icons/fi'
const AccountForm = () => {
	return (
		<div className='container'>
			<div className='pt-[124px] md:pt-[192px]'>
				<form>
					<div className='border rounded-md  p-5 mb-2'>
						<div className='flex gap-8 items-start screen_bnt:items-center'>
							<img
								className='rounded-full w-[80px]  md:w-[100px]'
								src='/myself.jpg'
								alt=''
							/>
							<div className='flex flex-wrap gap-5'>
								<button className='flex gap-1 items-center border py-0.5 px-1 sm:px-2 sm:py-1 rounded-md font-normal text-sen text-[14px] sm:text-base leading-7 text-blue-600 border-blue-600 hover:text-blue-700'>
									<FiUpload />
									Upload
								</button>
								<button className='border px-1 py-0.5  sm:px-2 sm:py-1 rounded-md font-normal text-[14px] text-sen sm:text-base leading-7 text-red-600 border-red-600 hover:text-red-700'>
									Deleted
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AccountForm
