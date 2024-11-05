import CourtsListItem from "@/Views/Courts/Components/CourtsListItem";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPagePM";
import { Court } from "@/DataClasses/Court";

interface propsType {
	pm: PMCourtsList;
}

export default function CourtsListView({ pm }: propsType) {
	return (
		<div>
			<div>{pm.username}</div>
			{pm.courtsList.map((c: Court, index: number) => (
				<CourtsListItem key={c.id} court={c} />
			))}
			<button onClick={pm.filterCourts.bind(pm, pm)}>click me</button>
		</div>
	);
}
