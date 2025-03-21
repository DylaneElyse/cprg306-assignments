// layout from root gets applied to everything
// then this layout gets applied to the page
// this is applied to the children
import { AuthContextProvider } from "./_utils/auth-context";

export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
