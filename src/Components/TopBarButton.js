import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const TopBarButton = (props) => {
	return (
		<Box>
			<Button {...props}>
				<Typography variant={props.fontType ? props.fontType: "subtitle1"}  >
					<Box fontWeight={ props.fontWeight ? props.fontWeight : 700} color={props.titleColor ? props.titleColor : "primary" }>
						{props.name}
					</Box>
				</Typography>
			</Button>
		</Box>
	)
}
export default TopBarButton;