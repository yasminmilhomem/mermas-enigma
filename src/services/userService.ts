// userService.ts
import { db, firestore } from "../database/firebaseConfig.ts"; // Importe a instância do banco de dados do Firebase
import { doc, getDoc } from "firebase/firestore";

// Função para buscar usuário por username
export const getUserByUsername = async (username: string) => {
  try {
    const userRef = firestore.doc(db, `users/${username}`); // Referência para o documento do usuário
    const doc = await firestore.getDoc(userRef); // Busca o documento do usuário
    if (doc.exists()) {
      console.log("Usuário encontrado: " + doc.data());
      return { username: doc.id, ...doc.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar usuário por username:", error);
    alert(
      "Erro ao buscar usuário. Certifique-se de que o username está correto e tente novamente."
    );
  }
};

// Função para criar um novo usuário no banco de dados
export const createUser = async (username: string) => {
  try {
    const newUserRef = firestore.doc(db, `users/${username}`); // Referência para o documento do novo usuário
    await firestore.setDoc(newUserRef, {
      username,
      enigma: 1, // Define o primeiro enigma como padrão para o novo usuário
      score: 0, // Define a pontuação inicial como 0 para o novo usuário
      photoNumber: Math.floor(Math.random() * 10) + 1, // Gera um número aleatório entre 1 e 10 para a foto do usuário
    }); // Cria o documento do novo usuário
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    alert("Erro ao criar usuário. Tente novamente.");
  }
};

// Função para buscar os dados do usuário pelo username
export const getUserDataByUsername = async (username: string) => {
  try {
    const userRef = firestore.doc(db, `users/${username}`); // Referência para o documento do usuário
    console.log("userRef:", userRef);
    const userSnapshot = await firestore.getDoc(userRef); // Busca o documento do usuário
    console.log("userSnapshot:", userSnapshot);
    if (userSnapshot.exists()) {
      console.log("Usuário encontrado:", userSnapshot.data());
      return userSnapshot.data();
    } else {
      console.error("Usuário não encontrado");
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    return null;
  }
};