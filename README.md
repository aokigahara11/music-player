# music-player

Лаконичный и быстрый локальный аудиоплеер, созданный с использованием Tauri v2, Rust и TypeScript (Vite).

## Стек технологий

* **Backend:** Rust, Tauri v2
* **Frontend:** TypeScript, HTML5, CSS3 / Vite
* **IPC Communication:** Tauri Command System

---

## Структура проекта

```text
├── src/                  # Фронтенд (UI, логика плеера, стили)
│   ├── assets/           # Иконки и статические ресурсы интерфейса
│   ├── main.ts           # Точка входа TypeScript
│   └── styles.css        # Стили приложения
├── src-tauri/            # Бэкенд (Rust)
│   ├── src/
│   │   ├── lib.rs        # Инициализация Tauri и обработка IPC
│   │   └── main.rs       # Точка входа Rust-приложения
│   ├── capabilities/     # Настройки прав и разрешений
│   ├── icons/            # Иконки приложения для сборки
│   ├── Cargo.toml        # Зависимости Rust
│   └── tauri.conf.json   # Конфигурация Tauri
└── package.json          # Зависимости Node.js / Скрипты
