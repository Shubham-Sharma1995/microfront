// pages/[id].tsx

import { GetServerSideProps } from "next";

interface DynamicPageProps {
  data: any; // Replace `any` with the type of your data
}

export const getServerSideProps: GetServerSideProps<DynamicPageProps> = async (
  context
) => {
  const { id } = context.params as { id: string }; // Get dynamic route parameter

  // Fetch data based on dynamic parameter
  const res = await fetch(`'https://dummyjson.com/users'/${id}`);
  const data = await res.json();

  return {
    props: { data }, // This will be passed to the page component as props
  };
};

const DynamicPage: React.FC<DynamicPageProps> = ({ data }) => {
  return (
    <div>
      <h1>Dynamic Page</h1>
      <div>
        Data for ID {data.id}: {JSON.stringify(data)}
      </div>
    </div>
  );
};

export default DynamicPage;
