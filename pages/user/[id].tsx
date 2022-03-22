import { Stack } from "@mui/material";
import type { NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from "next/image";
import { useRouter } from "next/router";
import TodoList from "../../components/todo/TodoList";
import Layout from "../../components/ui/Layout";

type TodoProps = {
    user: any;
}

const User: NextPage<TodoProps> = ({user}) => {

    const router = useRouter();

    if (router.isFallback) {
        return <h1>Cargando...</h1>
    }

  return (
    <Layout>
      <h1>{user?.name}</h1>
      <Stack>
        <Image src='/bill.jpeg' height={800} width={800}/>
      </Stack>
    </Layout>
  );
};

export default User;

export async function getStaticPaths(context: any) {

  //const res = await fetch(`http://localhost:3000/api/users`)
  //const data = await res.json();

  //const params = data.map((user: any) => {
  //    return user.id;
  //})

  return {
      paths: [
          {
              params: { id: '1' }
          },
          {
              params: { id: '2' }
          }
      ],
      fallback: true
  }
}

export async function getStaticProps(context: any) {

  const res = await fetch(`http://localhost:3000/api/user/${context.params.id}`)
  const data = await res.json();

  return {
      props: {
         user: data
      },
      revalidate: 1
  }

}