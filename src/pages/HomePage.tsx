import { Container, useMediaQuery, Box, Typography } from '@mui/material';

export default function HomePage() {
	const isMobile = useMediaQuery<boolean>('(max-width:600px)');

	return (
		<Container component="article">
			{!isMobile ? (
				<Box sx={{ pb: 7 }}>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nam pretium nulla urna, accumsan pretium erat
						ullamcorper venenatis. Orci varius natoque penatibus et
						magnis dis parturient montes, nascetur ridiculus mus.
						Aliquam vestibulum ultricies nisl nec rutrum. Aenean nec
						erat eu ante tempus tincidunt non vitae risus. Nullam
						facilisis ullamcorper lorem. Cras tortor erat, ultrices
						vitae nisl non, porttitor maximus libero. Pellentesque
						scelerisque venenatis tortor, at dapibus tortor congue
						hendrerit. Phasellus auctor eu elit posuere vehicula.
						Aliquam lorem neque, tempor sed consequat quis, iaculis
						quis nisi. Vivamus ut nisl dignissim, aliquam lorem ut,
						sodales eros. Curabitur vitae faucibus felis, vitae
						semper quam. Vestibulum nec neque quis libero dictum
						aliquet. Vestibulum sagittis nunc tortor, quis cursus
						lorem vehicula id. Proin odio lectus, lacinia eu massa
						non, auctor semper orci. Cras iaculis sem id urna
						tristique, non viverra eros gravida. Maecenas a libero
						consectetur, ultricies risus id, tempor ipsum. Sed
						rutrum orci rhoncus tellus finibus ullamcorper. Morbi
						non tincidunt sem. Nunc nibh nunc, faucibus ut cursus
						non, tempor ac ex. Cras ut condimentum nisi. Aliquam
						enim sapien, sodales vel ipsum ut, feugiat malesuada
						turpis. Quisque mollis dapibus eleifend. Proin sit amet
						urna suscipit, tristique diam ut, commodo lectus. In
						lorem justo, feugiat sed mauris non, aliquet consectetur
						est. Vestibulum vulputate interdum tortor, quis interdum
						sapien mattis quis. Donec blandit vel elit ut volutpat.
						Phasellus volutpat congue ipsum, sed pharetra ipsum
						egestas ac. Maecenas egestas sed nulla eget tincidunt.
						Nullam condimentum justo ut consectetur tristique.
						Curabitur sollicitudin augue sed ullamcorper vulputate.
						In auctor auctor nisi eu bibendum. Fusce viverra, diam
						sed laoreet sagittis, massa nisl rhoncus ligula, nec
						aliquet sem leo id nisi. Nulla sollicitudin porta felis.
						Vivamus ac aliquam nulla, in condimentum augue. Aliquam
						ac ligula ut odio commodo pulvinar nec nec dolor.
						Aliquam elementum vestibulum lorem, a finibus tellus
						gravida id. Fusce eget quam suscipit, vehicula dui at,
						mattis tortor. Curabitur ut fringilla odio. Proin in
						arcu id urna luctus posuere. Fusce imperdiet lobortis
						sollicitudin. Aenean nec odio sed eros blandit efficitur
						vel eu justo.
					</Typography>
				</Box>
			) : (
				<Box>
					<Typography>
						In sed ornare risus. Vivamus faucibus semper consequat.
						Integer id ex maximus, interdum velit in, imperdiet
						purus. Curabitur ac massa fermentum, rhoncus velit ac,
						viverra nibh. Vivamus vitae blandit ante. Etiam luctus
						sapien et orci euismod, sed auctor urna volutpat. Nam
						commodo feugiat rhoncus. Proin felis nisl, posuere nec
						ornare non, facilisis at mauris. Nulla tempor, sem id
						convallis pellentesque, sem elit feugiat quam, quis
						efficitur velit tellus in mi. Pellentesque finibus
						hendrerit nulla sit amet tristique. Phasellus faucibus
						metus et enim euismod maximus. Proin efficitur augue ut
						mattis iaculis. Maecenas auctor vitae mauris eget
						vehicula. Sed interdum lorem vel diam fermentum, quis
						semper quam laoreet. Suspendisse potenti.
					</Typography>
				</Box>
			)}
		</Container>
	);
}
