import ContentSnkrs from "../components/snkrs/Content-Snkrs";
import HeaderSnkrs from "../components/snkrs/Header-Snkrs";
import NavSnkrs from "../components/snkrs/Nav-Snkrs";

export default function Snkrs() {
  return (
    <div>
      <NavSnkrs />
      <HeaderSnkrs />
      <ContentSnkrs />
    </div>
  )
}