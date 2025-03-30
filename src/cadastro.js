import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    endereco: '',
    cidade: '',
    rua: '',
    numeroCasa: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      setError('As senhas não coincidem');
    } else {
      setError('');
      alert('Cadastro realizado com sucesso!');
    }
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      overflowY: 'auto',
      marginTop: '100px',
    }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '30px',
        width: '100%',
        maxWidth: '500px',
        overflowY: 'auto',
        maxHeight: '90vh',
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#333',
          fontWeight: 'bold',
          fontSize: '18px',
        }}>
          Cadastro de Usuário
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="nome" style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}>
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="senha" style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}>
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="confirmarSenha" style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}>
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="endereco" style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}>
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="cidade" style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}>
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="rua" style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}>
              Rua
            </label>
            <input
              type="text"
              id="rua"
              name="rua"
              value={formData.rua}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="numeroCasa" style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}>
              Número da Casa
            </label>
            <input
              type="text"
              id="numeroCasa"
              name="numeroCasa"
              value={formData.numeroCasa}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
          </div>

          {error && <p style={{
            color: 'red',
            fontSize: '14px',
            textAlign: 'center',
          }}>
            {error}
          </p>}

          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#4c90f0',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
          }}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
