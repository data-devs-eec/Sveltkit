const attributeLabels = [
	'District Name',
	'Unit Name',
	'FIR Number',
	'Year',
	'Month',
	'FIR Type',
	'FIR Stage',
	'Complaint Mode',
	'CrimeGroup Name',
	'CrimeHead Name',
	'Act Section',
	'Inquiry Officer Name',
	'Place of Offence',
	'Village Area Name',
	'Male',
	'Female',
	'Boy',
	'Girl',
	'Age',
	'Victim Count',
	'Accused Count',
	'Arrested Male',
	'Arrested Female',
	'Arrested Count',
	'Conviction Count'
];

export const Attributes: { value: string; label: string }[] = attributeLabels
	.sort()
	.map((label) => {
		const value = label.split(' ').join('-').toLowerCase();
		return {
			label,
			value
		};
	});
