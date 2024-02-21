import { ImageComponent } from "../Photo";
import { Grid } from "./styles";
import { photos } from "../../PhotosDb";

export const PhotosGrid = ({ page, category }) => {
  const photosToRender = photos[page]?.[category] || photos[page] || [];
  return (
    <Grid>
      {photosToRender.map((p) => (
        <ImageComponent key={p.id} src={p.src} id={p.id} hash={p.hash} />
      ))}
    </Grid>
  );
};
