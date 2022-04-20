import React from 'react'

const Profile = () => {
	return (
		<div className='mb-2 text-success text-center'>
			<img
				src='https://avatars.dicebear.com/api/avataaars/uufr4k.svg'
				className='rounded-circle border border-2 border-success mb-2'
				width='100'
				alt=''
			/>
			<h3 className='fs-5 mb-2'>Сергей Бернякович</h3>
			<a href='mailto:sb_aktau@bk.ru' className='text-success fs-5 ps-0'>
				<i className='bi bi-envelope-fill' /> sb_aktau@bk.ru
			</a>
		</div>
	)
}

export default Profile
