import type { NextPage } from "next";
import TodoList from "../components/todo/TodoList";
import Layout from "../components/ui/Layout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type TodoProps = {
    todos: any;
}

const ListStatic: NextPage<TodoProps> = ({todos}) => {
  return (
    <Layout>
      <TodoList todos={todos} />
    </Layout>
  );
};

export default ListStatic;

export async function getStaticProps(context: any) {

  const res = await fetch(`http://localhost:3000/api/sample-list`)
  const data = await res.json();

  return {
      props: {
         todos: data
      }
  }

}