import { Court } from "@/DataClasses/Court";

interface CourtsListItemProps {
	court: Court;
}

export default function CourtsListItem(props: CourtsListItemProps) {
	return (
		<div>
			<span>{props.court.name}</span>
			<span>{props.court.id}</span>
		</div>
	);
}
