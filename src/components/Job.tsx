import { Job as JobType } from 'types';
import { CompanyLogo, ContentContainer, ImageContainer, JobContainer, OtherContainer, Separator } from './style';

interface JobProps {
	job: JobType;
}

export const Job: React.FC<JobProps> = props => {
	const { job } = props;
	const { companyName, experience, link, locations, logo, skills, title } = job;

	const handleOnClick = () => {
		link && window.open(link, '_blank');
	};

	return (
		<>
			<JobContainer onClick={handleOnClick}>
				<ImageContainer>
					<CompanyLogo src={logo} alt={'Company Logo'} />
				</ImageContainer>
				<ContentContainer>
					<div>
						<h1>{title}</h1>
					</div>
					<div>
						{locations?.map((location, i) => (
							<div key={i}>
								<p>
									{location} {locations.length - 1 !== i && ' - '}
								</p>
							</div>
						))}
					</div>
					<OtherContainer>
						<p>{companyName}</p>
						<Separator />
						<p>{experience}</p>
					</OtherContainer>
					<div dangerouslySetInnerHTML={{ __html: skills }} />
				</ContentContainer>
			</JobContainer>
		</>
	);
};
