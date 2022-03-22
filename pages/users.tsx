import type { NextPage } from "next";
import TodoList from "../components/todo/TodoList";
import Layout from "../components/ui/Layout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type UsersProps = {
    users: any;
}

const Users: NextPage<UsersProps> = ({users}) => {
  return (
    <Layout>
      <TodoList todos={users} />
    </Layout>
  );
};

export default Users;

export async function getServerSideProps(context: any) {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/users`)
  const data = await res.json();

  return {
      props: {
         users: data,
         ...(await serverSideTranslations(context.locale, ['common']))
      }
  }

}