import { Box, Button, Heading } from "@hope-ui/solid";
import { JSX } from "solid-js";

type PageWrapperProps = {
	title: string;
	titleActions?: JSX.Element;
	children: JSX.Element;
};

export function PageWrapper(props: PageWrapperProps) {
	return (
		<Box
			css={{
				height: "calc(var(--vh) * 100)",
				padding: "0 25px",
				overflow: "auto",
				"--title-height": "85px",
				"--navbar-height": "60px",
			}}>
			<Heading
				size="3xl"
				css={{
					margin: "0",
					height: "var(--title-height)",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
				{props.title}
				<Box>{props.titleActions}</Box>
			</Heading>

			<Box css={{ height: "calc((var(--vh) * 100) - (var(--title-height) + var(--navbar-height)))" }}>
				{props.children}
			</Box>

			<Box css={{ height: "var(--navbar-height)" }}>navbar</Box>
		</Box>
	);
}
