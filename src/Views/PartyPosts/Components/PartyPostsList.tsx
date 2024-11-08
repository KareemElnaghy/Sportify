import PartyPost from "@/types/PartyPost";
import PartyPostsListItem from "./PartyPostsListitem";

interface PartyPostsListProps {
	postsList: PartyPost[];
}

export default function PartyPostsList({ postsList }: PartyPostsListProps) {
	return (
		<table>
			<thead>
				<tr>
					<th>
						<input type="checkbox" />
					</th>
					<th>Sport Name</th>
					<th>Current Signups</th>
					<th>Max Limit</th>
					<th>Meeting Time</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{postsList.map((postitem: PartyPost) => {
					return <PartyPostsListItem key={postitem.id} post={postitem} />;
				})}

				{/* {postsList.map((postitem: PartyPost) => (
					<PartyPostsListItem key={postitem.id} post={postitem} />
				))} */}
			</tbody>
		</table>
	);
}
