import { Box, Button, Heading, Text } from "@hope-ui/solid";

import { signIn } from "../stores/user";

import illustration from "../assets/signInImage.svg";

export function SignIn() {
	return (
		<Box css={{ padding: "30px" }}>
			<Heading size="3xl">Привет</Heading>

			<Text size="sm" css={{ marginTop: 15 }}>
				Для работы приложения нужна авторизация, вводить почту или номер телефона не потребуется, достаточно
				Google аккунта
			</Text>

			<Text size="sm" css={{ marginTop: 15 }}>
				Авторизация нужна для того, чтобы не потерять данные, в случае смены устройства или отчистки браузера
			</Text>

			<Box css={{ padding: "25px 0" }}>
				<img src={illustration} alt="Sign in illustration" />
			</Box>

			<Button onClick={signIn} css={{ marginTop: 40 }} colorScheme="accent" fullWidth>
				Войти используя Google
			</Button>
		</Box>
	);
}
