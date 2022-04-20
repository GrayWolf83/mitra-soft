import httpService from './http.service'

const endpoint = 'photos/'

const photoService = {
	getList: async (config = '') => {
		const { data } = await httpService.get(endpoint + config)
		return data
	},
}

export default photoService
