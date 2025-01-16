import './app-info.css';

const AppInfo = ({employeesTotal, employeesToBonus}) => {
	return (
		<div className="app-info"
			>
			<h1>Company employee count data</h1>
			<h2>Total number of employees: {employeesTotal}</h2>
			<h2>Entitlement to a bonus: {employeesToBonus}</h2>
		</div>
	);
}

export default AppInfo;