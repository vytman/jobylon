import { Job } from '@components';
import { AxiosJobs } from '@services';
import { getMappedJobs } from 'helpers';
import React from 'react';
import { Job as JobType } from 'types';
import { JobsContainer } from './style';

export const Jobs = () => {
	const [jobs, setJobs] = React.useState<JobType[]>([]);
	const [isLoading, setIsloading] = React.useState<boolean>(false);
	React.useEffect(() => {
		setIsloading(true);
		AxiosJobs.get('')
			.then(response => {
				const jobs = getMappedJobs(response.data);
				setJobs(jobs);
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setIsloading(false);
			});
	}, []);

	return (
		<JobsContainer>
			{jobs.map((job, i) => (
				<Job job={job} key={i} />
			))}
			<div className={`loader ${isLoading ? '' : 'hide'}`} />
		</JobsContainer>
	);
};
