import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import IconButton from "@material-ui/core/IconButton";
import { useRouter } from "next/router";

export default function NavIcon({ title, href, children }) {
  const { asPath } = useRouter();
  return (
    <>
      <Typography>{title}: </Typography>
      <Link href={href} passHref>
        <IconButton color={asPath === href ? "inherit" : "default"}>
          {children}
        </IconButton>
      </Link>
    </>
  );
}
