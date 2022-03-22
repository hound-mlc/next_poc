import type { NextPage } from "next";
import TodoList from "../components/todo/TodoList";
import Layout from "../components/ui/Layout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type TodoProps = {
    todos: any;
}

const TodoServer: NextPage<TodoProps> = ({todos}) => {
  return (
    <Layout>
      <TodoList todos={todos} />
    </Layout>
  );
};

export default TodoServer;

export async function getServerSideProps(context: any) {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/todo?lang=${context.locale}`)
  const data = await res.json();

  return {
      props: {
         todos: data,
         ...(await serverSideTranslations(context.locale, ['common']))
      }
  }

}