import { useEffect, useState } from 'react';
import { getPosts, createPost, updatePost, deletePost } from './PostService';

function Exemplo() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await getPosts();
    setPosts(data);
  };

  const handleAdd = async () => {
    await createPost({ title: 'Novo Post', content: 'Conteúdo novo' });
    fetchPosts();
  };

  const handleUpdate = async (id) => {
    await updatePost(id, { title: 'Atualizado', content: 'Conteúdo atualizado' });
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Posts 📚</h1>

        <div className="flex justify-center mb-8">
          <button
            onClick={handleAdd}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded"
          >
            Adicionar Post
          </button>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600">Nenhum post encontrado.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleUpdate(post.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Exemplo;
