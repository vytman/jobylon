import { Job } from 'types';

export const getMappedJobs = (data: any[]): Job[] => {
	return data.map(job => {
		const { company, locations, experience, skills, urls } = job;
		const mappedLocations = locations.map((location: any) => location.location.text);

		return {
			logo: company?.logo,
			title: job?.function,
			locations: mappedLocations,
			companyName: company?.name,
			experience,
			skills,
			link: urls?.apply,
		};
	});
};
