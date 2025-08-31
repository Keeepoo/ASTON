import React from 'react';
import { ThemeProvider } from "../shared/lib/theme/ThemeContext";
import MainLayout from "../shared/layouts/MainLayout";
import PostList from "../widgets/PostList/PostList";
import styles from './App.module.css';

function App() {
  const posts = [
    { id: 1, title: "Денис Ганеев", text: "Студент ASTON" },
    { id: 2, title: "Татьяна Фомичева", text: "Студент ASTON" },
    { id: 3, title: "Олег Петров", text: "Студент ASTON" }
  ];

  return (
    <ThemeProvider>
      <div className={styles.app}>
        <MainLayout>
          <h1 className={styles.title}>Список постов</h1>
          <PostList posts={posts} />
        </MainLayout>
      </div>
    </ThemeProvider>
  );
}

export default App;
