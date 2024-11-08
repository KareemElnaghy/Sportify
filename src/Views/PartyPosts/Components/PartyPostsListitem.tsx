import PartyPost from "@/types/PartyPost";

interface PartyPostsListItemProps {
	post: PartyPost;
}

export default function PartyPostsListItem({ post }: PartyPostsListItemProps) {
	return (
		<tr>
			<td>
				<input type="checkbox" />
			</td>
			<td>{post.sport}</td>
			<td>5</td>
			<td>9</td>
			<td>{post.startTime.toString()}</td>
			<td></td>
		</tr>
	);
}
