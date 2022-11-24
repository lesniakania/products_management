import ListItem from "@mui/material/ListItem";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemIcon";

export function NewProductForm(props: {
  saveProduct: (attributes: { name: string; price: number }) => void;
  cancelAddProduct: () => void;
}) {
  const { saveProduct, cancelAddProduct } = props;
  let name = "";
  let price = 0;

  const onNameChanged = (event: { target: { value: any } }) => {
    name = event.target.value;
  };
  const onPriceChanged = (event: { target: { value: any } }) => {
    price = Number(event.target.value);
  };

  const onSaveClicked = () => {
    saveProduct({ name, price });
  };

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <TextField label="Name" onChange={onNameChanged} />
        <TextField label="Price" onChange={onPriceChanged} />
        <Button onClick={onSaveClicked}>Save</Button>
        <Button color="primary" onClick={cancelAddProduct}>
          <CancelIcon />
        </Button>
      </ListItemButton>
    </ListItem>
  );
}
