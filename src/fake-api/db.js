// src/fake-api/db.js

// 🔥 CHAVE ÚNICA DO PROJETO
const STORAGE_KEY = "saas_consorcio_db_v1";

// ----------
// ESTADO BASE
// ----------
const defaultState = {
  users: [
    {
      id: 1,
      nome: "Administrador",
      email: "admin@teste.com",
      role: "admin",
      telefone: "",
    },
    {
      id: 2,
      nome: "Gestor",
      email: "gestor@teste.com",
      role: "gestor",
      telefone: "",
    },
    {
      id: 3,
      nome: "Vendedor",
      email: "vendedor@teste.com",
      role: "vendedor",
      telefone: "",
    },
  ],

  regras: [],

  contratos: [],

  config: {
    empresa: {
      nome: "",
      cnpj: "",
      corPrimaria: "#000000",
    },
    sistema: {
      diaFechamento: 5,
      mesInicial: "Janeiro",
      valorMinimo: 0,
    },
    permissoes: {
      gestorCriaRegras: true,
      gestorEditaUsuarios: false,
    },
    notificacoes: {
      emailImportacao: true,
      emailComissoes: false,
    },
  },
};

// ====================
// FUNÇÃO PRINCIPAL
// ====================
export const db = {
  state: {},

  // Carregar DB
  load() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      this.state = JSON.parse(saved);
    } else {
      this.state = defaultState;
      this.save();
    }
  },

  // Gravar DB
  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
  },

  // Reset DB (opcional)
  reset() {
    this.state = defaultState;
    this.save();
  },

  // ====================
  // USERS
  // ====================
  users: {
    all() {
      return db.state.users;
    },

    findByEmail(email) {
      return db.state.users.find((u) => u.email === email);
    },

    create(user) {
      const newUser = { id: Date.now(), ...user };
      db.state.users.push(newUser);
      db.save();
      return newUser;
    },

    update(id, updates) {
      const idx = db.state.users.findIndex((u) => u.id === id);
      if (idx >= 0) {
        db.state.users[idx] = { ...db.state.users[idx], ...updates };
        db.save();
      }
    },

    delete(id) {
      db.state.users = db.state.users.filter((u) => u.id !== id);
      db.save();
    },
  },

  // ====================
  // REGRAS
  // ====================
  regras: {
    all() {
      return db.state.regras;
    },

    create(regra) {
      const nova = { id: Date.now(), ...regra };
      db.state.regras.push(nova);
      db.save();
      return nova;
    },

    update(id, updates) {
      const idx = db.state.regras.findIndex((r) => r.id === id);
      if (idx >= 0) {
        db.state.regras[idx] = { ...db.state.regras[idx], ...updates };
        db.save();
      }
    },

    delete(id) {
      db.state.regras = db.state.regras.filter((r) => r.id !== id);
      db.save();
    },
  },

  // ====================
  // CONFIGURAÇÕES
  // ====================
  config: {
    get() {
      return db.state.config;
    },

    update(newConfig) {
      db.state.config = { ...db.state.config, ...newConfig };
      db.save();
    },
  },
};

// Inicializar DB ao importar
db.load();
