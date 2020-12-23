import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const TopBarButton = (props) => {
	return (
		<Box>
			<Button {...props}>
				<Typography variant="subtitle1" >
					<Box fontWeight={700}>
						{props.name}
					</Box>
				</Typography>
			</Button>
		</Box>
	)
}
export default TopBarButton;