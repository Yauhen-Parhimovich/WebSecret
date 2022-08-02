import axios from 'axios';

export const useHttp = () => {
	const request = async (url: string, method = 'GET', params: any = null) => {
		try {
			const response = await axios.get(url, {
				params
			});
			return response.data;

		} catch (e) {
			throw e;
		}
	}

	return {request};
};
