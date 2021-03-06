import { Box, Container, Grid, Typography,Paper } from "@material-ui/core"
import Image from "next/image"

export default function Form() {
    return (
      <Box mt={5}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScq3DLbSh95jkqllq_NM_ayTcAEdszocyVw5Jz7LDnuaAv-2Q/viewform?embedded=true"
                width="400"
                height="600"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                backgroundCOlor="#ffff"
              >
                Loading…
              </iframe>
            <Image
              src="/dataImage.svg"
              alt="laptop and lab samples"
              layout="intrinsic"
              height={400}
              width={400}
            />
          </Grid>
        </Grid>
      </Box>
    );
}