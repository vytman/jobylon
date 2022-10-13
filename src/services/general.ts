import { Url } from '@constants';
import axios from 'axios';

const headers = {
	'Content-Type': 'application/json',
};

export const AxiosJobs = axios.create({
	baseURL: Url.JOBS,
	headers,
});
