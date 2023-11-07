function ListGroup() {
  const ClientID = import.meta.env.VITE_CLIENT_ID;
  const ClientSecret = import.meta.env.VITE_CLIENT_SECRET;
  const RedirectURI = import.meta.env.VITE_REDIRECT_URI;
  const items = [ClientID, RedirectURI, ClientSecret];
  console.log(items);
}

export const ClientID = import.meta.env.VITE_CLIENT_ID;
export const ClientSecret = import.meta.env.VITE_CLIENT_SECRET;
export const RedirectURI = import.meta.env.VITE_REDIRECT_URI;

export default ListGroup;
