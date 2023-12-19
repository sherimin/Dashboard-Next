import { redirect } from "next/navigation";

const Homepage = () => {
  // return <div>Homepage</div>;
  redirect('/dashboard')
};

export default Homepage;
