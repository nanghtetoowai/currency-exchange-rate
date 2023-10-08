import { Outlet } from 'react-router-dom';
import { AppShell, Container, Group, Text } from '@mantine/core';

export default function RootLayout(): React.ReactElement {
	return (
		<AppShell layout="alt" header={{ height: 60 }} padding="md">
			<AppShell.Header>
				<Group h="100%" align="center" p="sm">
					<Text component="h1" fw={500} fz={20}>
						Currency Rate
					</Text>
				</Group>
			</AppShell.Header>
			<AppShell.Main>
				<Container>
					<Outlet />
				</Container>
			</AppShell.Main>
		</AppShell>
	);
}
