import { Button } from "@hope-ui/solid";
import { useStore } from "@nanostores/solid";

import { PageWrapper } from "../components/PageWrapper";

import { $userInfo, signOut } from "../stores/user";

export function Logs() {
	const userInfo = useStore($userInfo);

	return (
		<PageWrapper
			titleActions={
				<Button size="xs" colorScheme="accent">
					Добавить запись
				</Button>
			}
			title="Журнал">
			<Button onClick={signOut}>sign out</Button>
		</PageWrapper>
	);
}
