import { useState, useEffect } from 'react';
import { users } from '../../../../shared/lib/mocks/users';

export interface Comment {
  id: number;
  text: string;
}

export interface Post {
  id: number;
  title: string;
  text: string;
  comments: Comment[];
  userId: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
}

export interface UsePostsReturn {
  posts: Post[];
  users: User[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const usePosts = (): UsePostsReturn => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockPosts: Post[] = [
        {
          id: 1,
          title: "Привет! Я студент ASTON",
          text: "Привет всем! Я Денис Ганеев, студент ASTON. Изучаю веб-разработку и очень рад быть частью этого сообщества!",
          comments: [
            { id: 1, text: "Привет! Как учёба? Какие предметы изучаешь?" },
            { id: 2, text: "ASTON - отличная школа! Удачи в обучении! 🎓" },
            { id: 3, text: "Какой курс? Я тоже там учусь, может знакомы?" }
          ],
          userId: 1
        },
        {
          id: 4,
          title: "Изучаю React и TypeScript",
          text: "Недавно начал изучать React с TypeScript. Очень нравится типизация - помогает избежать ошибок на этапе разработки. Планирую создать свой первый проект на этих технологиях!",
          comments: [
            { id: 5, text: "Отличный выбор технологий! TypeScript действительно очень помогает" },
            { id: 6, text: "Удачи в изучении! React + TypeScript - мощная связка" },
            { id: 7, text: "Если будут вопросы по React, обращайся!" }
          ],
          userId: 1
        },
        {
          id: 2,
          title: "Ищем разработчиков в команду!",
          text: "Привет! Меня зовут Татьяна Фомичева, я HR-менеджер. Мы ищем талантливых разработчиков для нашей команды. Если вы заинтересованы в новых возможностях, давайте обсудим!",
          comments: [
            { id: 1, text: "Какие технологии используете? Очень интересно!" },
            { id: 2, text: "Готова рассмотреть вакансию! Отправлю резюме" },
            { id: 3, text: "Условия работы какие? Удалёнка возможна?" },
            { id: 4, text: "Опыт работы требуется? Или берёте junior-ов?" }
          ],
          userId: 2
        },
        {
          id: 3,
          title: "Как вы провели это лето?",
          text: "Привет всем! Я Олег Петров, фотограф и путешественник. Лето было потрясающим! Хотелось бы узнать, как вы провели эти тёплые месяцы?",
          comments: [
            { id: 1, text: "Отлично провёл время на море! Было жарко, но очень круто 🌊" },
            { id: 2, text: "Лето прошло быстро... В основном работал, но выходные были классные!" },
            { id: 3, text: "Путешествовал по России - столько красивых мест открыл для себя!" },
            { id: 4, text: "Было круто! Ходил в походы, много времени на природе провёл 🏔️" }
          ],
          userId: 3
        }
      ];
      
      setPosts(mockPosts);
    } catch (err) {
      setError('Ошибка загрузки постов');
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    users,
    loading,
    error,
    refetch
  };
};
