interface MyComponentProps {
	name?: string;
}

export default function Login() {
	return (
		<div>
			Hello
			<MyComponent />
		</div>
	);
}

function MyComponent(props: MyComponentProps) {
	return <div>My Component {props.name}</div>;
}
