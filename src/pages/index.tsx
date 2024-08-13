// pages/index.tsx

import { GetServerSideProps } from "next";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  // Add other fields as necessary
}

interface HomePageProps {
  data: User[]; // Replace `any` with the correct type
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
) => {
  // Simulate a server-side data fetch
  const res = await fetch("https://dummyjson.com/users");
  const rawData = await res.json();

  // Extract and filter data
  const filteredData = rawData.users.filter((user: User) => {
    // Apply any filter conditions you need here
    return user.firstName && user.lastName && user.email && user.gender;
  });

  return {
    props: { data: filteredData }, // This will be passed to the page component as props
  };
};

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <>
      <div>
        <div>Server-Side Rendered Page</div>
        <div>Filtered Data:</div>
        <div>
          {data?.map((user, index) => (
            <div key={index}>
              {user.firstName} {user.lastName} ({user.gender}) - {user.email}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;

// pages/index.tsx

// import { GetServerSideProps } from "next";

// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   gender: string;
//   // Add other fields as necessary
// }
// interface HomePageProps {
//   data: User[]; // Replace `any` with the type of your data
// }

// export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
//   context
// ) => {
//   // Simulate a server-side data fetch
//   const res = await fetch("https://dummyjson.com/users");
//   const data = await res.json();

//   const filterData = data.users.filter((user: User) => {
//     return user.firstName && user.lastName && user.email && user.gender;
//   });

//   return {
//     props: { data: filterData }, // This will be passed to the page component as props
//   };
// };

// const HomePage: React.FC<HomePageProps> = ({ data }) => {
//   return (
//     <div>
//       <h1>Server-Side Rendered Page</h1>
//       <p>Data from server: {JSON.stringify(data)}</p>
//     </div>
//   );
// };

// export default HomePage;
