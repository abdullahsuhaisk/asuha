import { Box, Typography } from "@material-ui/core";

function HeaderAndSeperator({header}) {
    return (
        <div style={{textAlign:"center", paddingTop:"20px"}}>
            <Typography variant="h6" color="secondary">
                <Box component="span" fontWeight={700} textAlign="center">
                    {header.h1}
                </Box>
                <Box component="span" marginLeft={1} color="text.secondary" fontWeight={700}>
                    {header.h2}
                </Box>
            </Typography>
            <Typography variant="h4" color="secondary">
                <Box fontWeight={700} paddingX={10}>
                    {header.info}
                </Box>
            </Typography>
        </div>
    )
}

export default HeaderAndSeperator;