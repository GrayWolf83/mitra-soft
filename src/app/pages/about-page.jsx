import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BackButton from '../components/common/BackButton'

const AboutPage = () => {
	return (
		<>
			<BackButton />
			<Row>
				<Col>
					<h2>Обо мне</h2>
					<p className='text-justify fw-bold'>
						Здравствуйте! Меня зовут Сергей. Мне 39 лет. До декабря
						2019 года работал в системе МВД Республики Казахстан на
						технических должностях (ремонт компьютерной техники,
						администрирование серверного и сетевого оборудования,
						информационная безопасность). С 31 декабря 2019 года
						вышел на пенсию по выслуге лет.
					</p>
					<p className='text-justify fw-bold'>
						С января 2020 года по настоящее время изучал различные
						технологии в области веб разработки (HTML, CSS,
						JavaScript, React, Node и т.д.). Во время изучения
						периодически откликался на вакансии, делал тестовые
						задания, ходил на собеседования (по результатам которых
						делал для себя выводы и отмечал слабые места, которые
						нужно подтянуть). Брал заказы на бирже фриланса, делал
						пэт проекты, учавствовал в хакатонах.
					</p>
					<p className='text-justify fw-bold'>
						На сегодняшний день с увереностью заявляю, что готов
						приступить к работе на должности Junior Frontend
						разработчик (React)!
					</p>
				</Col>
			</Row>
		</>
	)
}

export default AboutPage
