import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://www.aficioncentral.com/media/cache/resolve/lg/uploads/futbol-ecuatoriano/2026/enero/liga-de-quito-lisandro-alzugaray.jpg" />
      <Avatar alt="Travis Howard" src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0508%2Fr1489882_1296x729_16%2D9.jpg&w=1140&cquality=40&format=jpg" />
      <Avatar alt="Cindy Baker" src="https://media.elcomercio.com/wp-content/uploads/2024/12/arce_futuro_1-1024x683.jpg" />
    </Stack>
  );
}
